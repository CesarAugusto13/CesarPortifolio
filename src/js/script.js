$(document).ready(function() {
    // Função para lidar com o clique no botão móvel
    $('#mobile-btn').on('click', function () {
        $('#mobile-menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });

    // Selecionando elementos umaD vez e armazenando-os em variáveis
    const sections = $('section');
    const navItems = $('.nav-item');

    // Evento de rolagem da janela
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(this).scrollTop();

        // Aplicando ou removendo a sombra do cabeçalho conforme necessário
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        // Encontrando a seção ativa com base na posição de rolagem
        let activeSectionIndex = 0;
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96; // Ajuste para compensar a altura do cabeçalho
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // Sair do loop each assim que a seção ativa for encontrada
            }
        });

        // Removendo a classe 'active' de todos os itens de navegação e adicionando à seção ativa
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Iniciando o ScrollReveal
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.proj', {
        origin: 'center',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.eu-geral', {
        origin: 'down',
        duration: 1000,
        distance: '20%'
    });
});
