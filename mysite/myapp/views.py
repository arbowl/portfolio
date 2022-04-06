from django.shortcuts import render
from rest_framework import generics
from .serializers import GameServerSerializer, MusicBotSerializer
from .models import GameServer, MusicBot


# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'home.html')

class GameView(generics.CreateAPIView):
    queryset = GameServer.objects.all()
    serializer_class = GameServerSerializer

class MusicView(generics.CreateAPIView):
    queryset = MusicBot.objects.all()
    serializer_class = MusicBotSerializer