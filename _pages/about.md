---
layout: about
title: Carousel Example
slides:
  - image: profpic.jpg
    title: First Slide Title
    description: Description for the first slide.
  - image: image2.jpg
    title: Second Slide Title
    description: Description for the second slide.
  - image: image3.jpg
    title: Third Slide Title
    description: Description for the third slide.
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }}</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        {% for slide in page.slides %}
          <div class="carousel-item {% if forloop.first %}active{% endif %}">
            <img src="{{ slide.image }}" class="d-block w-100" alt="{{ slide.title }}">
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ slide.title }}</h5>
              <p>{{ slide.description }}</p>
            </div>
          </div>
        {% endfor %}
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>


<!-- ---
layout: about
title: Home  
permalink: /  
subtitle: <a href='https://engineering.unl.edu/mme/faculty/mohammad-razavi/'>Affiliations</a>  

profile:  
  align: right  
  image: prof_pic.jpg  
  image_circular: true  
  more_info: >  
    <p>City Campus</p>  
    <p>University of Nebraska–Lincoln</p>  
    <p>Lincoln, NE 68588</p>  
    <p>(402) 472-2375</p>  
    <p>Email: <a href="mailto:mrazavi2@unl.edu">mrazavi2@unl.edu</a></p>  
    <p>Research: Lymphatic research focusing on mechanisms of lymphatic diseases, molecular pathways, or imaging techniques</p>  
    <div class="google-map">  
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.2687282054803!2d-96.6975617!3d40.8220607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8796bee64db8981d%3A0x1ea22287c2f3016d!2sScott%20Engineering%20Center!5e0!3m2!1sen!2sus!4v1736712329331!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
news: false # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---
mission_statement:
  <h2>Mission Statement</h2>
  <p>Our mission is to advance the understanding of lymphatic diseases through innovative research, cutting-edge molecular studies, and development of advanced imaging techniques. We strive to translate these findings into solutions that improve human health and well-being.</p> -->