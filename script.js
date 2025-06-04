$(document).ready(function () {
  // Configuration for all accordion items

  // const accordionConfig = [
  //   { collapseId: '#collapseOne', cardClass: '.collapse-one' },
  //   { collapseId: '#collapseTwo', cardClass: '.collapse-two' },
  //   { collapseId: '#collapseThree', cardClass: '.collapse-three' },
  //   { collapseId: '#collapseFour', cardClass: '.collapse-four' },
  //   { collapseId: '#collapseFive', cardClass: '.collapse-five' },
  //   { collapseId: '#collapseSix', cardClass: '.collapse-six' },
  // ];

  // // Variables to track hover state for each card
  // const hoverStates = {};

  // // Initialize hover states
  // accordionConfig.forEach((config) => {
  //   hoverStates[config.collapseId] = {
  //     timeout: null,
  //     isHovering: false,
  //     isCollapsing: false,
  //   };
  // });

  // // Setup show/hide handlers for all accordion items
  // accordionConfig.forEach((config) => {
  //   const { collapseId, cardClass } = config;

  //   // Show event handler
  //   $(collapseId).on('show.bs.collapse', function () {
  //     $(cardClass).css({
  //       transition: 'opacity 0.3s ease',
  //       opacity: '0',
  //     });
  //     $(cardClass).hide();
  //   //   setTimeout(function () {
  //   //   }, 500);
  //   });

  //   // Hide event handler
  //   $(collapseId).on('hide.bs.collapse', function () {
  //     $(cardClass).show().css({
  //       transition: 'opacity 0.3s ease',
  //       opacity: '0',
  //     });
  //     $(cardClass).css('opacity', '1');
  //   //   setTimeout(function () {
  //   //   }, 10);
  //   });

  //   // Track collapsing state
  //   $(collapseId).on('hide.bs.collapse', function () {
  //     hoverStates[collapseId].isCollapsing = true;
  //   });

  //   $(collapseId).on('hidden.bs.collapse', function () {
  //     hoverStates[collapseId].isCollapsing = false;
  //   });
  // });

  // // Function to check if device supports hover (desktop)
  // function isDesktop() {
  //   return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  // }

  // // Setup hover functionality for each card (desktop only)
  // $('.card').each(function (index) {
  //   const $card = $(this);
  //   const config = accordionConfig[index];

  //   if (!config) return; // Skip if no config for this card

  //   const { collapseId } = config;
  //   const state = hoverStates[collapseId];

  //   // Only apply hover effects on desktop
  //   if (isDesktop()) {
  //     $card.hover(
  //       // Mouse enter
  //       function () {
  //         state.isHovering = true;
  //         clearTimeout(state.timeout);

  //         // Only open if not already open/opening
  //         if (
  //           !$(collapseId).hasClass('show') &&
  //           !$(collapseId).hasClass('collapsing')
  //         ) {
  //           state.timeout = setTimeout(function () {
  //             if (state.isHovering) {
  //               $(collapseId).collapse('show');
  //             }
  //           }, 200);
  //         }
  //       },
  //       // Mouse leave
  //       function () {
  //         state.isHovering = false;
  //         clearTimeout(state.timeout);

  //         // Only close if currently open and not collapsing
  //         if ($(collapseId).hasClass('show') && !state.isCollapsing) {
  //           state.timeout = setTimeout(function () {
  //             if (!state.isHovering) {
  //               $(collapseId).collapse('hide');
  //             }
  //           }, 300);
  //         }
  //       },
  //     );
  //   }

  //   // Button click handler works on all devices
  //   $card.find('[data-toggle="collapse"]').on('click', function () {
  //     if (isDesktop()) {
  //       clearTimeout(state.timeout);
  //       state.isHovering = false;
  //     }
  //   });
  // });

  // // Optional: Add visual hover effects only on desktop
  // if (isDesktop()) {
  //   // Add smooth hover transitions for all cards
  //   $('.card').css({
  //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  //   });

  //   // Add subtle hover effect on all cards
  //   $('.card').hover(
  //     function () {
  //       $(this).css({
  //         transform: 'translateY(-2px)',
  //         'box-shadow': '0 4px 15px rgba(0,0,0,0.1)',
  //       });
  //     },
  //     function () {
  //       $(this).css({
  //         transform: 'translateY(0)',
  //         'box-shadow': 'initial',
  //       });
  //     },
  //   );
  // }

  // // Handle device orientation/resize changes
  // $(window).on('resize orientationchange', function () {
  //   // Remove hover effects if switching to mobile
  //   if (!isDesktop()) {
  //     $('.card').off('mouseenter mouseleave').css({
  //       transform: 'translateY(0)',
  //       'box-shadow': 'initial',
  //       transition: 'none',
  //     });

  //     // Clear any pending hover timeouts
  //     Object.keys(hoverStates).forEach((collapseId) => {
  //       const state = hoverStates[collapseId];
  //       clearTimeout(state.timeout);
  //       state.isHovering = false;
  //     });
  //   }
  // });

  //schdule event hover effect

  const player = videojs('my-video-showreel-video');
  const muteToggle = document.getElementById('mute-toggle');

  if (player && muteToggle) {
    const unmutedIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
    <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
    </svg>
    `;

    const mutedIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
</svg>
    `;

    function updateIcon() {
      muteToggle.innerHTML = player.muted() ? mutedIcon : unmutedIcon;
    }

    // Initialize
    updateIcon();

    muteToggle.addEventListener('click', () => {
      player.muted(!player.muted());
      updateIcon();
    });
  }

 
});
