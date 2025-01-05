from flask import Flask
from app.models import db, login_manager

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your_secret_key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///social_network.db'

    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'login'

    with app.app_context():
        db.create_all()

    from app.routes import app as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
