from django.urls import path, include
from . import views
from .views import GameView, MusicView, CreatePostView, SignUpView

urlpatterns = [
    path('', CreatePostView.as_view(), name="home"),
    path('portfolio', CreatePostView.as_view(), name="portfolio"),
    path('album', CreatePostView.as_view(), name="album"),
    path('calendar', CreatePostView.as_view(), name="calendar"),
    path('stocks', CreatePostView.as_view(), name="stocks"),
    path('about', CreatePostView.as_view(), name="about"),
    path('contact', CreatePostView.as_view(), name="contact"),
    path('servers/valheim', GameView.as_view()),
    path('servers/minecraft', GameView.as_view()),
    path('servers/musicbot', MusicView.as_view()),
    path('accounts/', include('django.contrib.auth.urls')),
    path('signup/', SignUpView.as_view(), name="signup"),
]
