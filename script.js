// Interações do currículo

function setCopyFeedback(button, message, background) {
  if (!button) return;
  const original = button.dataset.originalLabel || button.textContent;
  button.dataset.originalLabel = original;
  button.textContent = message;
  button.style.background = background;
  clearTimeout(button._copyTimeout);
  button._copyTimeout = setTimeout(() => {
    button.textContent = button.dataset.originalLabel || original;
    button.style.background = '';
  }, 1500);
}

async function copyPhone(phone, button) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(phone);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = phone;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (!ok) throw new Error('copy-failed');
    }
    setCopyFeedback(button, 'Copiado!', '#4ade80');
  } catch {
    setCopyFeedback(button, 'Falhou', '#f87171');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const printBtn = document.getElementById('print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  document.querySelectorAll('[data-copy-phone]').forEach((button) => {
    button.addEventListener('click', async () => {
      const phone = button.getAttribute('data-copy-phone') || '';
      await copyPhone(phone, button);
    });
  });

  const avatar = document.querySelector('.avatar[data-hover-src]');
  if (avatar) {
    const staticSrc = avatar.getAttribute('src');
    const hoverSrc = avatar.getAttribute('data-hover-src');
    const preload = new Image();
    preload.src = hoverSrc;

    const WINK_INTERVAL = 10000;
    const WINK_DURATION = 3000;
    let winkInterval;
    let winkTimeout;

    const playWink = () => {
      clearTimeout(winkTimeout);
      avatar.src = hoverSrc;
      winkTimeout = setTimeout(() => {
        avatar.src = staticSrc;
      }, WINK_DURATION);
    };

    avatar.addEventListener('mouseenter', () => {
      playWink();
      winkInterval = setInterval(playWink, WINK_INTERVAL);
    });

    avatar.addEventListener('mouseleave', () => {
      clearInterval(winkInterval);
      clearTimeout(winkTimeout);
      avatar.src = staticSrc;
    });
  }

});
