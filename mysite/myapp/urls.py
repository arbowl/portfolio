from django.urls import path
from . import views
from .views import GameView, MusicView

urlpatterns = [
    path('', views.index),
    path('servers/valheim', GameView.as_view()),
    path('servers/minecraft', GameView.as_view()),
    path('servers/musicbot', MusicView.as_view()),
]
