(function() {
    'use strict';

    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (!menuToggle || !navMenu) return;

        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                menuToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            }
        });
    }

    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const successMsg = document.getElementById('form-success');
            if (successMsg) {
                successMsg.style.display = 'block';
                successMsg.focus();
                this.reset();

                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            }
        });
    }

    function updateYear() {
        const yearElement = document.getElementById('year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                initMobileMenu();
                initContactForm();
                updateYear();
            });
        } else {
            initMobileMenu();
            initContactForm();
            updateYear();
        }
    }

    init();
})();
