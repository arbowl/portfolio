from django.shortcuts import render
from rest_framework import generics
from .serializers import GameServerSerializer, MusicBotSerializer, PostSerializer
from .models import GameServer, MusicBot, Post
from django.views.decorators.cache import cache_page
from django.views.generic import ListView, DetailView


# Create your views here.
#@cache_page(60 * 15)
# Default
def index(request, *args, **kwargs):
    return render(request, 'home.html')

class PostView(ListView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

# Servers
class GameView(generics.CreateAPIView):
    queryset = GameServer.objects.all()
    serializer_class = GameServerSerializer

class MusicView(generics.CreateAPIView):
    queryset = MusicBot.objects.all()
    serializer_class = MusicBotSerializer