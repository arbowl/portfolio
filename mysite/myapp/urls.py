from django.urls import path
from . import views
from .views import GameView, MusicView, PostView

urlpatterns = [
    path('', PostView.as_view()),
    path('portfolio/', PostView.as_view()),
    path('album/', PostView.as_view()),
    path('chores/', PostView.as_view()),
    path('stocks/', PostView.as_view()),
    path('servers/', PostView.as_view()),
    path('about/', PostView.as_view()),
    path('contact/', PostView.as_view()),
    path('servers/valheim', GameView.as_view()),
    path('servers/minecraft', GameView.as_view()),
    path('servers/musicbot', MusicView.as_view()),
]
