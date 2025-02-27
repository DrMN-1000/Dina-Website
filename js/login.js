document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');

    // تأثيرات عند تحميل الصفحة
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 1s ease-in-out';
    }, 100);

    // التحقق من كلمة المرور
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = passwordInput.value;
        if (password === 'dena') {
            // تأثيرات الانتقال
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease-in-out';
            
            setTimeout(() => {
                window.location.href = 'profile.html';
            }, 500);
        } else {
            // تأثيرات الخطأ
            passwordInput.style.borderColor = '#ff0000';
            passwordInput.style.animation = 'shake 0.5s';
            
            setTimeout(() => {
                passwordInput.style.borderColor = '#ffb6c1';
                passwordInput.style.animation = '';
            }, 500);
            
            alert('كلمة المرور غير صحيحة، حاولي مرة أخرى يا قطتي 🥺');
        }
    });

    // تأثيرات إضافية
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        heart.style.animationDelay = `${index * 2}s`;
    });

    // تأثيرات الكتابة
    const title = document.querySelector('.romantic-title');
    const text = "أهلًا بقلبي";
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < text.length) {
            title.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 150);
        }
    }

    typeWriter();
});

// تأثيرات CSS عبر JavaScript
const style = document.createElement('style');
style.innerHTML = `
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        50% { transform: translateX(10px); }
        75% { transform: translateX(-10px); }
        100% { transform: translateX(0); }
    }

    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(-1deg); }
        50% { transform: translateY(-20px) rotate(1deg); }
    }

    @keyframes heartFloat {
        0% { transform: translateY(110vh) rotate(0deg); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
    }

    @keyframes pulse {
        0% { transform: translateX(-50%) scale(0.8); opacity: 0.8; }
        50% { transform: translateX(-50%) scale(1.2); opacity: 1; }
        100% { transform: translateX(-50%) scale(0.8); opacity: 0.8; }
    }
`;
document.head.appendChild(style);