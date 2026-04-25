---
layout: page
title: Projects
permalink: /projects/
description: > #Lab members
nav: true
nav_order: 3
display_categories: > #[work, work]
horizontal: false
---

under construction

 
## Funding & Support
 
Our research is generously supported by:
 
<div class="funders" style="display: flex; align-items: center; flex-wrap: wrap; gap: 2rem; margin: 1.5rem 0 0.5rem 0;">
  <a href="https://www.nih.gov" target="_blank" rel="noopener" title="National Institutes of Health">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/NIH_Master_Logo_Vertical_2Color.png/240px-NIH_Master_Logo_Vertical_2Color.png"
         alt="National Institutes of Health (NIH)"
         style="height: 80px; width: auto; object-fit: contain;" />
  </a>
  <a href="https://www.heart.org" target="_blank" rel="noopener" title="American Heart Association">
    <img src="https://en.wikipedia.org/wiki/File:American_Heart_Association_Logo.svg"
         alt="American Heart Association (AHA)"
         style="height: 80px; width: auto; object-fit: contain;" />
  </a>
</div>
<p style="font-size:0.85rem; color:#666; margin-top:0.5rem;">
  <em>We are grateful for the support of our funding agencies. The content of our research is solely the responsibility of the authors and does not necessarily represent the official views of these organizations.</em>
</p>
 

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
