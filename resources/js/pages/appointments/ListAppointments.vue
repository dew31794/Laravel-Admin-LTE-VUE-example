<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Appointment</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">Appointment</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="container-fluid">
            <div class="row phtoo-box">
                <div class="col-12">
                    <div class="card-columns">
                        <div class="card">
                            <input type="checkbox" id="checkthis2" />
                            <label for="checkthis2"><i class="fas fa-check"></i></label>
                            <a class="glightbox" href="https://images.pexels.com/photos/2403569/pexels-photo-2403569.jpeg" data-toggle="lightbox" data-title="sample 1 - white" data-gallery="gallery">
                                <img src="https://images.pexels.com/photos/2403569/pexels-photo-2403569.jpeg" class="img-fluid" alt="black sample"/>
                            </a>
                        </div>
                        <div class="card">
                            <input type="checkbox" id="checkthis3" />
                            <label for="checkthis3"><i class="fas fa-check"></i></label>
                            <a class="glightbox" href="https://images.pexels.com/photos/3650469/pexels-photo-3650469.jpeg" data-toggle="lightbox" data-title="sample 1 - white" data-gallery="gallery">
                                <img src="https://images.pexels.com/photos/3650469/pexels-photo-3650469.jpeg" class="img-fluid" alt="red sample"/>
                            </a>
                        </div>
                        <div class="card">
                            <input type="checkbox" id="checkthis4" />
                            <label for="checkthis4"><i class="fas fa-check"></i></label>
                            <a class="glightbox" href="https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg" data-toggle="lightbox" data-title="sample 1 - white" data-gallery="gallery">
                                <img src="https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg" class="img-fluid" alt="red sample"/>
                            </a>
                        </div>
                        <div class="card">
                            <input type="checkbox" id="checkthis5" />
                            <label for="checkthis5"><i class="fas fa-check"></i></label>
                            <a class="glightbox" href="https://images.pexels.com/photos/3342697/pexels-photo-3342697.jpeg" data-toggle="lightbox" data-title="sample 1 - white" data-gallery="gallery">
                                <img src="https://images.pexels.com/photos/3342697/pexels-photo-3342697.jpeg" class="img-fluid" alt="white sample"/>
                            </a>
                        </div>
                        <div class="card">
                            <input type="checkbox" id="checkthis6" />
                            <label for="checkthis6"><i class="fas fa-check"></i></label>
                            <a class="glightbox" href="https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg" data-toggle="lightbox" data-title="sample 1 - white" data-gallery="gallery">
                                <img src="https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg" class="img-fluid" alt="black sample"/>
                            </a>
                        </div>
                        <div class="card">
                            <input type="checkbox" id="checkthis7" />
                            <label for="checkthis7"><i class="fas fa-check"></i></label>
                            <a class="glightbox" href="https://images.pexels.com/photos/1082024/pexels-photo-1082024.jpeg" data-toggle="lightbox" data-title="sample 1 - white" data-gallery="gallery">
                                <img src="https://images.pexels.com/photos/1082024/pexels-photo-1082024.jpeg" class="img-fluid" alt="black sample"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scope>
    .btn-box a{
        font-size: 0.875rem;
        font-weight: 300;
        cursor: pointer;
        outline: 0;
        user-select: none;
        border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
        border-style: solid;
        border-radius: 4px;
        border-width: 1px;
        background-color: hsl(0, 0%, 100%);
        color: hsl(0, 0%, 29%);
        padding: 8px;
        text-decoration: none;
        display: inline-block;
    }

    .btn-box a.btn-delete{
        color: hsl(0deg 86.96% 46.75%);
        border-color: hsl(0deg 82.16% 64.69%);
    }

    .btn-box .btn-delete:hover {
        border-color: hsl(0deg 100% 49.61%);
        background-color: hsl(0deg 23.26% 97.95%);
    }

    .btn-box .btn-delete:active {
        background-color: hsl(0deg 76.84% 89.8%);
    }

    .file input[type='file'] {
        display: none;
    }

    .file label,
    .file button {
        font-size: 0.875rem;
        font-weight: 300;
        cursor: pointer;
        outline: 0;
        user-select: none;
        border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
        border-style: solid;
        border-radius: 4px;
        border-width: 1px;
        background-color: hsl(0, 0%, 100%);
        color: hsl(0, 0%, 29%);
        padding: 8px;
    }

    .file label:hover,
    .file button:hover {
        border-color: hsl(0, 0%, 21%);
    }

    .file label:active,
    .file button:active {
        background-color: hsl(0, 0%, 96%);
    }

    .file label > i,
    .file button > i {
        padding-right: 5px;
    }

    .file-upload > label,
    .file-upload > button {
        color: hsl(204, 86%, 53%);
        border-color: hsl(204, 86%, 53%);
    }

    .file-upload > label:hover,
    .file-upload > button:hover {
        border-color: hsl(204, 86%, 53%);
        background-color: hsl(204, 86%, 96%);
    }

    .file-upload > label:active,
    .file-upload > button:active {
        background-color: hsl(204, 86%, 91%);
    }

    .phtoo-box .card-columns a {
        display: inline-block;
    }

    .phtoo-box .card-columns i.fas{
        line-height: unset;
    }

    .phtoo-box .card-columns input[type="checkbox"][id^="checkthis"] {
        display: none;
    }

    .phtoo-box .card-columns label {
        display: block;
        position: absolute;
        top: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        cursor: pointer;
        background-color: white;
        color: white;
        border: 1px solid #07b21e;
        border-radius: 50%;
        text-align: center;
        line-height: 22px;
        transition-duration: 0.4s;
        transform: scale(0);
        z-index: 999;
    }

    .phtoo-box .card-columns .card:hover label{
        transform: scale(1);
    }

    .phtoo-box .card-columns  :checked + label {
        color: #07b21e;
        transform: scale(1);
    }

    @media (min-width: 768px) {  
        .phtoo-box .card-columns {column-count: 4;}
    }

    @media (min-width: 992px) { 
        .phtoo-box .card-columns {column-count: 4;}
    }

    @media (min-width: 1200px) {  
        .phtoo-box .card-columns {column-count: 5;} 
    }
    

</style>