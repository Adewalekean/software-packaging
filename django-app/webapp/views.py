from django.http import HttpResponse


def home(request):
    return HttpResponse("Hello! My Django application is running.")