from flask import Flask
from flask_migrate import Migrate
from app.models import db, login_manager
from app.routes import main as main_blueprint

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your_secret_key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///social_network.db'

    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'main.login'

    # Configura Flask-Migrate
    migrate = Migrate(app, db)

    with app.app_context():
        db.create_all()

    app.register_blueprint(main_blueprint)

    return app
