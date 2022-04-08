from django.shortcuts import render
from rest_framework import generics
from .serializers import GameServerSerializer, MusicBotSerializer
from .models import GameServer, MusicBot
from django.views.decorators.cache import cache_page


# Create your views here.
#@cache_page(60 * 15)

def index(request, *args, **kwargs):
    return render(request, 'home.html')

class GameView(generics.CreateAPIView):
    queryset = GameServer.objects.all()
    serializer_class = GameServerSerializer

class MusicView(generics.CreateAPIView):
    queryset = MusicBot.objects.all()
    serializer_class = MusicBotSerializer