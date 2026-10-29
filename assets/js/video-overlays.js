/* Cargo-style overlay for vertical YouTube Shorts. */
document.querySelectorAll('.reel, .video-container-916').forEach((container) => {
  if (!container.querySelector('iframe') || container.querySelector('.glass-overlay')) return;

  container.insertAdjacentHTML('beforeend', `
    <div class="glass-overlay" aria-hidden="true">
      <div class="custom-shorts-button">
        <svg viewBox="0 0 24 24" width="120" height="120" aria-hidden="true">
          <path d="M17.77 10.32l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.84C4.17 7.81 3.48 10.08 4.45 11.91l1.2 .5L4 13.06c-1.84.96-2.53 3.23-1.56 5.06s3.24 2.53 5.07 1.56L18 15.3c1.83-.97 2.53-3.24 1.56-5.07l-1.79.09z" fill="#287c46"></path>
          <path d="M17.77 10.32l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.84C4.17 7.81 3.48 10.08 4.45 11.91l1.2 .5L4 13.06c-1.84.96-2.53 3.23-1.56 5.06s3.24 2.53 5.07 1.56L18 15.3c1.83-.97 2.53-3.24 1.56-5.07l-1.79.09zM10 14.65V8.35l5.2 3.15L10 14.65z" fill="#287c46" stroke="#287c46" stroke-width="3" stroke-linejoin="round"></path>
          <path d="M10 14.65V8.35l5.2 3.15L10 14.65z" fill="#ffffff"></path>
        </svg>
      </div>
    </div>`);
});
