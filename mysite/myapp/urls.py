from django.urls import path
from . import views
from .views import GameView, MusicView, PostView

urlpatterns = [
    path('', views.index),
    path('portfolio/', views.index),
    path('social/', views.index),
    path('album/', views.index),
    path('chores/', views.index),
    path('stocks/', views.index),
    path('servers/', views.index),
    path('about/', views.index),
    path('contact/', views.index),
    path('servers/valheim', GameView.as_view()),
    path('servers/minecraft', GameView.as_view()),
    path('servers/musicbot', MusicView.as_view()),
]
