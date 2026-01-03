document.addEventListener('DOMContentLoaded', () => {
    // Popup Elements
    const contactUsLink = document.getElementById('contact-us-link');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');

    if (contactUsLink && popup && overlay && closeBtn) {
        contactUsLink.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });
    }

    // Language Switcher
    const languageSwitcher = document.getElementById('language-switcher');

    if (languageSwitcher) {
        // Function to update content based on language
        function updateLanguage(lang) {
            const isArabic = lang === 'ar';

            document.querySelectorAll('[data-en]').forEach(el => {
                const newText = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
                if (newText) el.textContent = newText;
            });

            // Button should show the OPTION to switch to the OTHER language
            languageSwitcher.textContent = isArabic ? 'English' : 'العربية';

            document.documentElement.lang = lang;
            document.body.dir = isArabic ? 'rtl' : 'ltr';

            // Persist preference
            localStorage.setItem('preferredLanguage', lang);

            // Restore visibility after update
            document.body.style.visibility = 'visible';
            document.body.style.opacity = '1';
        }

        // Initialize state
        // Default to 'ar' if nothing is saved
        const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
        updateLanguage(savedLang);

        languageSwitcher.addEventListener('click', () => {
            const currentStored = localStorage.getItem('preferredLanguage') || 'ar';
            const newLang = currentStored === 'ar' ? 'en' : 'ar';
            updateLanguage(newLang);
        });
    }
});
