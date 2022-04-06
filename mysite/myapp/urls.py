from django.urls import path
from . import views
from .views import GameView, MusicView

urlpatterns = [
    path('', views.index),
    path('about.html', views.about),
    path('contact.html', views.contact),
    path('servers/valheim', GameView.as_view()),
    path('servers/valheim', GameView.as_view()),
    path('servers/musicbot', MusicView.as_view()),
]
