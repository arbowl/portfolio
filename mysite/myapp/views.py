from django.shortcuts import render
from rest_framework import generics, viewsets
from .serializers import GameServerSerializer, MusicBotSerializer, PostSerializer
from .models import GameServer, MusicBot, Post
from django.views.decorators.cache import cache_page
from django.views.generic import ListView, DetailView, CreateView
from django.views import generic
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy


# Create your views here.
#@cache_page(60 * 15)
# Default
def index(request, *args, **kwargs):
    return render(request, 'home.html')

class PostView(ListView):
    model = Post
    template_name = 'home.html'
    serializer_class = PostSerializer
    queryset = reversed(Post.objects.order_by('date'))

class CreatePostView(CreateView):
    model = Post
    template_name = 'home.html'
    fields = '__all__'

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.author = self.request.user
        obj.save()
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        kwargs['object_list'] = reversed(Post.objects.order_by('date'))
        return super(CreatePostView, self).get_context_data(**kwargs)

class SignUpView(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'

# Servers
class GameView(generics.CreateAPIView):
    queryset = GameServer.objects.all()
    serializer_class = GameServerSerializer

class MusicView(generics.CreateAPIView):
    queryset = MusicBot.objects.all()
    serializer_class = MusicBotSerializer