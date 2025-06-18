from fastapi import FastAPI

from Login import ValidateFunc, func
from signin import insert
from ForgtPass import frgtpass
from UserInfo import retrieve_data

app = FastAPI()

app.add_api_route("/Validate", ValidateFunc, methods=["POST"])
app.add_api_route("/AuthTable", func, methods=["GET"])
app.add_api_route("/insert", insert, methods=["POST"])
app.add_api_route("/reset-password", frgtpass, methods=["POST"])
app.add_api_route("/select", retrieve_data, methods=["POST"])


