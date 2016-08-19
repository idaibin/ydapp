{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/footer/footer.tpl"%}
        {% widget "home:widget/message/message.tpl"%}
     </div>
{% endblock %}