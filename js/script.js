document.addEventListener('DOMContentLoaded', function() {
    // تأثيرات الصور
    document.querySelectorAll('.section-card img').forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'rotate(2deg) scale(1.05)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'rotate(0) scale(1)';
        });
    });

    // تحكم بالفيديو
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('play', () => {
            video.style.boxShadow = '0 0 20px var(--gold)';
        });
        video.addEventListener('pause', () => {
            video.style.boxShadow = 'none';
        });
    });

    // تأثيرات التنقل
    document.querySelectorAll('a, button').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});
// حساب التاريخ المستهدف (28 فبراير)
<script>
// تاريخ عيد الميلاد (28 فبراير 2024)
const targetDate = new Date('2025-02-28T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // تحديث العناصر
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (diff < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-container').innerHTML = `
            <h2 class="celebration-title">
                <i class="fas fa-gift"></i>
                مبروك الحب! اليوم الأسطوري قد حان 🎉
                <i class="fas fa-gift"></i>
            </h2>
            <p class="celebration-message">
                من اليوم وإلى الأبد.. كل عام وأنت أغلى ما في حياتي يا قطتي الجميلة 💖
            </p>
        `;
    }
}

// تحديث العد التنازلي كل ثانية
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // التشغيل الفوري
</script>