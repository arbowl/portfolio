from django.http import HttpResponseRedirect
from django.shortcuts import redirect, render
from .models import Post, GamePost
from django.views.decorators.cache import cache_page
from django.views.generic import CreateView
from django.views import generic
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from django.urls import reverse_lazy


# Create your views here.
#@cache_page(60 * 15)
# Default
def index(request, *args, **kwargs):
    return render(request, 'home.html')


@login_required
def delete_post(request, post_id=None):
    post_to_delete = Post.objects.get(id=post_id)
    post_to_delete.delete()
    return HttpResponseRedirect('/')


@staff_member_required
def delete_file(request, file_id=None):
    file_to_delete = GamePost.objects.get(id=file_id)
    file_to_delete.delete()
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


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



class UploadView(CreateView):
    model = GamePost
    template_name = 'upload.html'
    fields = '__all__'
    success_url = '/'
    

def DownloadListView(request):
    game_request = request.GET['game']
    file_list = GamePost.objects.filter(game=game_request)
    return render(request, 'download.html', {'file_list' : file_list})

