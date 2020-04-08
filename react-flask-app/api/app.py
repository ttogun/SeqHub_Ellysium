import time

from flask import request, render_template, jsonify, url_for, redirect, g
from sqlalchemy.exc import IntegrityError

from .util.auth import generate_token, requires_auth, verify_token
from .util.index import app, db
from .util.models import User
from .util.index import app, db


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}


@app.route("/api/user", methods=["GET"])
@requires_auth
def get_user():
    return jsonify(result=g.current_user)


@app.route("/register", methods=["POST"])
def create_user():
    incoming = request.get_json()
    print(incoming)
    user = User(
        email=incoming["email"],
        password=incoming["password"]
    )
    db.session.add(user)

    try:
        db.session.commit()
    except IntegrityError:
        return jsonify(message="User with that email already exists"), 409

    new_user = User.query.filter_by(email=incoming["email"]).first()

    return jsonify(
        id=user.id,
        access_token=generate_token(new_user)
    )


@app.route("/login", methods=["POST"])
def get_token():
    incoming = request.get_json()
    print(incoming)
    user = User.get_user_with_email_and_password(incoming["email"], incoming["password"])
    if user:
        return jsonify(access_token=generate_token(user))

    return jsonify(error=True), 403


@app.route("/api/is_token_valid", methods=["POST"])
def is_token_valid():
    incoming = request.get_json()
    is_valid = verify_token(incoming["access_token"])

    if is_valid:
        return jsonify(token_is_valid=True)
    else:
        return jsonify(token_is_valid=False), 403
