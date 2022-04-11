from django.urls import path
from . import views
from .views import GameView, MusicView, PostView, CreatePostView

urlpatterns = [
    path('', CreatePostView.as_view(), name="home"),
    path('portfolio', PostView.as_view(), name="portfolio"),
    path('album', PostView.as_view(), name="album"),
    path('chores', PostView.as_view(), name="chores"),
    path('stocks', PostView.as_view(), name="stocks"),
    path('about', PostView.as_view(), name="about"),
    path('contact', PostView.as_view(), name="contact"),
    path('servers/valheim', GameView.as_view()),
    path('servers/minecraft', GameView.as_view()),
    path('servers/musicbot', MusicView.as_view()),
]
