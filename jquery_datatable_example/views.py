from django.views import generic


class DatatableView(generic.TemplateView):
    template_name = 'datatable_view.html'
