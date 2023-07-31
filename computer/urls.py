from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'computer'

urlpatterns = [
    path('', views.index.as_view(), name = 'index'),
    path('home', views.index.as_view(), name = 'home'),
    # path('brand',views.brand_main_page, name='brand'),
    path('computer_add',views.AddComputer.as_view(), name='computer_add'),
    path('computer_update/<int:id>/',views.UpdateComputer.as_view(), name='computer_update'),
    path('computer_view/',views.view_computer, name='computer_view'),
    path('brand_add',views.add_brand, name='brand_add'),
    path('view_brand',views.view_brand, name='view_brand'),
    path('update_brand/<int:id>/',views.update_brand, name='update_brand'),
    path('delete_brand/<int:id>/',views.delete_brand, name='delete_brand'),
    path('computer_delete/<int:id>/',views.delete_computer, name='computer_delete'),
    path('delete_specification/<int:id>/',views.delete_specification, name='delete_specification'),
    
    path('add_specification',views.add_specification, name='add_specification'),
    path('view_specification',views.view_specification, name='view_specification'),
    path('update_specification/<int:id>/',views.update_specification, name='update_specification'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

