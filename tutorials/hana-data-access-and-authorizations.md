---
layout: tutorial
title: Hana Data Access and Authorization
primary_tag: topic>abap-development
tags: [  tutorial>beginner, topic>abap-development ]
---
# Hello Data!

# Access your first data in a native HANA Application.

Written by Thomas Bieser, October 2014

In this tutorial you will make your very first steps to access data on HANA. This tutorial will write a native HANA application, using the Web-based Development Workbench.

<div class="tutorialCard section" markdown='1'>
  <div class="tags-wrapper">
    <span class="icon-tag opener">Tags</span>
    <ul class="list-inline tags">
      <li>
        <a href="#" class="tag tag-technology">HANA</a>
      </li>
       <li>
        <a href="https://www.sap.com" class="tag tag-technology" target="_blank">HANA</a>
      </li>
      <li>
        ![Google](https://google.com" target="_blank)
      </li>
    </ul>
  </div>
</div>

## Prerequisites  
![](/assets/hana-data_files/ico-01.png){: height='20' width='35'} [Set up a HANA instance on a cloud provider](#)  
![](/assets/hana-data_files/ico-01.png){: height='20' width='35'} [Hello World! Develop your first HANA application](#)

## Next Steps  
Follow our other tutorials on the HANA Cloud Platform website  
![](/assets/hana-data_files/ico-01.png){: height='20' width='35'} [Hello User! Authorize your first user.](#)  
![](/assets/hana-data_files/ico-01.png){: height='20' width='35'} [Check out the other tutorials on our HANA Cloud Platform website](#)

## Details

### You will learn  

1. How to browse data using the SAP HANA Web-based Development Workbench.
2. Opening a connection to the SAP HANA database.
3. Preparing and executing a very simple SQL query on the system table DUMMY.

### Time to Compete

Beginners might take 10-15 minutes to execute this tutorial.

### Quick Start

The full application build in this tutorial can be found in the Github repository [https://github.com/SAP/cloud-hana-helloworld/](https://github.com/SAP/cloud-hana-helloworld/).

## ![](/assets/hana-data_files/icon_02.png) Open theWeb-based Development Workbench

### Using HANA Cloud Platform  
Each Trial HANA instance comes with the HANA Web-based Development Workbench.  The workbench allows you to develop on HANA without the need to set up a local development environment.  

Login to the [HANA Cloud Cockpit](https://account.hanatrial.ondemand.com/cockpit) with your free developer edition account.

Choose HANA Instances and choose then SAP HANA Web-based Development Workbench link.  

You are now in the Editor and can immediately start developing in HANA. ![](./assets/hana-data_files/img-09.png)
