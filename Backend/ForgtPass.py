import mysql.connector
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

security = HTTPBasic()

class Item(BaseModel):
    Username: str
    Password: str

def authenticate(credentials: HTTPBasicCredentials, obj: Item):
    if credentials.username != obj.Username or credentials.password != obj.Password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Basic"},
        )

def get_db_connection():
    return mysql.connector.connect(
        host="sql12.freesqldatabase.com",
        user="sql12785742",
        password="xZrFFriYiV",
        database="sql12785742",
        port=3306,
    )

@app.post("/reset-password")
def frgtpass(
    obj: Item,
    credentials: HTTPBasicCredentials = Depends(security)
):
    authenticate(credentials, obj)

 
    mydb = get_db_connection()
    mycursor = mydb.cursor()

    try:
        mycursor.execute("SELECT Username FROM AuthTable WHERE Username = %s;", (obj.Username,))
        result = mycursor.fetchone()

        if result:
            mycursor.execute("UPDATE AuthTable SET Password = %s WHERE Username = %s;", (obj.Password, obj.Username))
            mydb.commit()
            return {"status": "Success", "message": "Password updated successfully"}
        else:
            return {"status": "Failure", "message": "Username not found"}
    finally:
        mycursor.close()
        mydb.close()
