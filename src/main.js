import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, showLoader } from "./js/render-functions";

const form = document.querySelector('.form');

form.addEventListener("submit", async (elem) => {
    elem.preventDefault();

    const query = elem.target.elements["search-text"].value.trim();

    if (!query) return;

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(query);
        const images = data.hits;

        if (images.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "topRight"
            });
            return;
        }
        createGallery(images);
    } catch (err) {
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
            position: 'topRight'
        });
    } finally {
        hideLoader();
    }
});