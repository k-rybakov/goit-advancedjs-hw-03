import iziToast from 'izitoast';
import findPhotos from './js/pixaby-api';
import {
  renderGallery,
  toast,
  showLoader,
  hideLoader,
} from './js/render-functions';

try {
  const form = document.querySelector('form');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const query = form.elements.search.value.trim();

    if (!query) {
      toast("Query mustn't be empty", 'error');
      return;
    }

    showLoader();
    const apiResponse = await findPhotos(query);
    hideLoader();
    renderGallery(apiResponse?.hits ?? []);
    form.reset();
  });
} catch (e) {
  toast(e.message, 'error');
}
