# CloudPulse DevOps Project

## Overview

CloudPulse is a complete DevOps-based cloud-native web application project that demonstrates:

* Frontend application deployment
* Docker containerization
* Kubernetes orchestration
* Jenkins CI/CD automation
* Terraform infrastructure provisioning
* Prometheus monitoring
* Grafana visualization

The project deploys an interactive Date Dashboard application on AWS EC2 using Kubernetes and continuously monitors infrastructure and application metrics.

---

# Project Architecture

![Image](https://images.openai.com/static-rsc-4/VVs6dNj_n6NG72aBvjpSa9dbufkqqRR_215f2sYw1g-yS1iOH4YG3q6NrsjVqy0qbjVXNOfa7O5jARMpsua8kFGFIjsq9hJnSDNTf071C97sguciQ5k94in9JLndCkmASt5qeWwRiYLLAFQ-5KkmnHVMhzD95de13lH-u-BeC0qaERawzRpEvPnZ4xoVXW8g?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/waub1wR5LgqVV_LMsH5ZIqckjVQF2d5IF_b58BaFnhG9fOIh5z8i9iyN936UPJxQbgsHa9IifFV-c11GOAK7c3gq42Dy58C-JezsZRVHLnZwC42_xq_RV-qevv2lcVhnmAY057KuV9yBEBB1JGwgKyQoJ1uj_YX5GD74ywEQF7kss__I-4ZaobT4PdooOL1N?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/6n1lrvxFoY4xtu4jsNbwYJgXiGx0fbqISxXMjmLxRGcj6YKmrC822v9S37QWwCx6nbbepIRXyQOXElMrxD5TNXsvSwiRmOGg9rqlsE65We41Z7mavlx_VdC35VwBz6qC5S3CHdPsW8og1mSW6U1MEucmBuogzCgzBkTMY7FLRyFBeBXwvRw5L7lXEr27uugK?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/cd4Xe6B_PA-2E0pPKbZEPjK0vBAFeayF71M7yi8HaFW7hkfBIUWIocjWe7YVMxHenAVw0GNtp_LwxAy2jhvxQhdnlfPS_xqtbkzCyH9oUrfQGDSvnks0Yc3ycBR5y0QS4hjef7Ici2IIAot6nRNJxYZ0ZAYtIwLjEnAYMUTGDJjy_SY46kS121n2ptZFDgHX?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/CotXQXWFDtm6YXwL4_WJTh2vu8evVU0x-q1xW4h8NLHEnq6ztTPU8S08Ml7lrfUzEXrLZkdbw594mytKigYaldtG_dKzDI3qby2WJSFuR-GSBg-LeYFOczwyn3-NTi-2iPgO0_80uGHBBBaLajCVH4VnsK82gPNttvGc3_ZyJyMaCOkwIyZreyjMnwEPMNUW?purpose=fullsize)

```text id="m7q2wx"
User
  ↓
CloudPulse Web Application
  ↓
Docker Container
  ↓
DockerHub Registry
  ↓
Jenkins CI/CD Pipeline
  ↓
Kubernetes Deployment (K3s)
  ↓
AWS EC2 Instance
  ↓
Prometheus Monitoring
  ↓
Grafana Dashboards
```

---

# Features

* Interactive Date Utility Dashboard
* Dark/Light Theme Toggle
* Day & Week Calculations
* Leap Year Detection
* Future/Past Date Calculations
* Dockerized Application
* Kubernetes Deployment
* Automated Jenkins Pipeline
* Infrastructure as Code using Terraform
* Real-time Monitoring with Prometheus & Grafana

---

# Tech Stack

| Category         | Technologies          |
| ---------------- | --------------------- |
| Frontend         | HTML, CSS, JavaScript |
| Containerization | Docker                |
| Orchestration    | Kubernetes (K3s)      |
| CI/CD            | Jenkins               |
| Monitoring       | Prometheus, Grafana   |
| Infrastructure   | Terraform             |
| Cloud            | AWS EC2               |
| Web Server       | Nginx                 |

---

# Folder Structure

```text id="w3m8ra"
cloudpulse-devops-project/
│
├── app/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── nginx.conf
│
├── docker/
│   └── Dockerfile
│
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── namespace.yaml
│
├── monitoring/
│   └── prometheus.yml
│
├── terraform/
│   ├── main.tf
│   ├── outputs.tf
│   ├── variables.tf
│   └── terraform.tfvars
│
├── docker-compose.yml
├── Jenkinsfile
├── .gitignore
└── README.md
```

---

# Application Features

## Date Calculations

The application can:

* Find day of selected date
* Calculate week number
* Calculate day of year
* Find remaining days in year
* Add/Subtract 30 days
* Calculate difference from today
* Detect leap years

---

# Docker Setup

## Build Docker Image

```bash id="f2w7qx"
docker build -t cloudpulse -f docker/Dockerfile .
```

## Run Container

```bash id="t9m1ra"
docker run -d -p 8080:80 cloudpulse
```

---

# Kubernetes Deployment

## Create Namespace

```bash id="y5q8wp"
kubectl apply -f k8s/namespace.yaml
```

## Deploy Application

```bash id="n4v2tx"
kubectl apply -f k8s/
```

## Verify Pods

```bash id="u8m7qa"
kubectl get pods -n cloudpulse
```

## Verify Services

```bash id="x1q5rz"
kubectl get svc -n cloudpulse
```

---

# Jenkins CI/CD Pipeline

The Jenkins pipeline performs:

1. Clone GitHub Repository
2. Build Docker Image
3. Push Image to DockerHub
4. Deploy Updated Image to Kubernetes
5. Verify Rollout Status

---

# Terraform Infrastructure

Terraform provisions:

* AWS EC2 Instance
* Security Groups
* Required Networking Rules

## Terraform Commands

### Initialize

```bash id="m2w8qy"
terraform init
```

### Preview Infrastructure

```bash id="r6q1tx"
terraform plan
```

### Create Infrastructure

```bash id="v4m9pa"
terraform apply
```

### Destroy Infrastructure

```bash id="p7x2wr"
terraform destroy
```

---

# Monitoring Setup

## Prometheus

Prometheus collects:

* Application Metrics
* Container Metrics
* Node Metrics
* Nginx Metrics

## Grafana

Grafana visualizes:

* Website Requests
* Active Connections
* CPU Usage
* Memory Usage
* Uptime Monitoring

---

# Monitoring Architecture

![Image](https://images.openai.com/static-rsc-4/VKbuAPsOchfmqX1qV98iH2ruf3FH_hJt5xhutZsH34TepuhwmhO2LmcZ8VxyhPuN1TM0TuH88tpl--psWn-ATeusKzZo5GYGCg7mEGax1EuY8OnuuQnES-SLsa-ZBBrj_Au0_4Ki3ClUlJiRkmFPaPk-ZulWpyzMPKvZ_ocBtnc_mf7NRVuNSNwgWU09oJGo?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/q3B-VgxSf9G--DmbWSEG-HrMz1CreNqsASKjIw74-VJHp23SVeG1fwplLT6CivikR42yOhvLEBkJFpHddDxB8x8O44kexFP8UHTMvZyOMUYp3AxiTEp-hYYamHur9Dr8ejYz8GYSiW4yE4YlZs7TbM4XI8PJKW-Rix_b_rD9C9XnWU6O_OYxoytvS5uPR2ta?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/PtjQnPIgqsK7ha2y_w4Unf-Z5hgXit2hycH_HQNksDxYz94Tbkh2sTbmEZcxyk1qEd22yVsVbnTPCxrBvAlO4wfkkgLvtNqnyVkRWXjQKK3_lHP1Rbg3lAQKxzlcOj03e9pc590b-mx1oJi3C6V-0zNbz_ghmaFDJPnSMQUQN0pq-Qg3Ad7Pp_po2lxYL0tt?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/7th6bBFAxZOtnZdQiZmAvkKyNcjKm9aTdYYjOeR_tXn6a56TiTBO_y80LiucqU1GIClE3RQU8ZxH2FbsUfdfp31hu-tx855otiOVH-rQnQsBP0tf8V9Gzi2afd8hdcsXOFOK9UyuxtH3RVfVqTGzcXG9wuFTaIxYpxUBe79wX5dqYhT_WawnP5yG58y1zBVa?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/lJKL3ZKcjN_kMiqfMySBQBRyPO6liSr5Vc9Rnf1IMZz9XkBl3bOjp2syDg2KRLb24SbgtTzvXjzKdD_d3T_dK_0U0hOlsZH07fM6ZuRaykZ8jPqI_lyDJTf2_gQz_EojjNnEXx7fRq_-CaxISQ5oipDpM8C00iERN4X040lJ8SZBkw1VvU0VXmEGXJcmPsHc?purpose=fullsize)

```text id="k8q3wx"
Nginx
  ↓
Nginx Exporter
  ↓
Prometheus
  ↓
Grafana
```

---

# Services & Ports

| Service        | Port  |
| -------------- | ----- |
| Application    | 30080 |
| Grafana        | 3000  |
| Prometheus     | 9090  |
| Jenkins        | 8082  |
| Node Exporter  | 9100  |
| Nginx Exporter | 9113  |
| cAdvisor       | 8081  |

---

# Access URLs

## Application

```text id="j4m7pa"
http://YOUR_EC2_IP:30080
```

## Grafana

```text id="c9w2qx"
http://YOUR_EC2_IP:3000
```

## Prometheus

```text id="t1q8rz"
http://YOUR_EC2_IP:9090
```

## Jenkins

```text id="m5v7wx"
http://YOUR_EC2_IP:8082
```

---

# Grafana Dashboard Metrics

The dashboard includes:

* Total Website Hits
* Requests Per Second
* Active Connections
* CPU Usage
* Memory Usage
* Website Uptime

---

# Security Improvements

Recommended improvements:

* Restrict Security Group CIDR ranges
* Secure Prometheus endpoints
* Add Kubernetes resource limits
* Add readiness/liveness probes
* Use secrets management

---

# Future Improvements

* Deploy Prometheus inside Kubernetes
* Add Helm Charts
* Add HTTPS with Nginx Ingress
* Add Alertmanager
* Add GitHub Actions CI/CD
* Add Kubernetes Horizontal Pod Autoscaler
* Add Centralized Logging (ELK/Loki)

---

# Learning Outcomes

This project demonstrates practical knowledge of:

* Cloud Infrastructure
* CI/CD Automation
* Containerization
* Kubernetes Orchestration
* Monitoring & Observability
* Infrastructure as Code
* DevOps Workflows

---

# Author

Himanshu Khajanchi Jain

---

# License

This project is created for educational and learning purposes.
