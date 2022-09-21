import React from "react";



export default function geomap() {
    return (
        <section class="fullWidth">
            <h2 class="d-flex justify-content-center">Map</h2>
            <div class="google-maps">
                <iframe
                    id="myIframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.89028976239!2d34.797245999999994!3d32.08793150000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2z16rXnCDXkNeR15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1653124428349!5m2!1siw!2sil"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div class="d-flex justify-content-between">
                    <button  disabled="" class="btn button-map">
                        Prev
                    </button>
                    <button class="btn button-map">Next</button>
                </div>
            </div>
        </section>
    );
}
