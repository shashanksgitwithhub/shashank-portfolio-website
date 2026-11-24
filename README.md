# Serverless Cloud Resume Platform – AWS & Cloudflare

A production-style personal portfolio platform demonstrating cloud infrastructure, Infrastructure as Code, serverless computing, DNS management, and cloud-based application deployment.

**Live Website:** https://shashanktj.com

## Project Overview

Designed and deployed a personal cloud resume platform, initially using AWS services and Terraform, and subsequently migrated website hosting, DNS management, and visitor counting to Cloudflare.

The project demonstrates practical experience with AWS infrastructure, Cloudflare Pages, Cloudflare Workers, Workers KV, Terraform, Git, and GitHub.

## Architecture

The current production architecture consists of two independent workflows.

### 1. Website Hosting and Delivery

```text
             User / Browser
                   |
                   v
             Custom Domain
            shashanktj.com
                   |
                   v
             Cloudflare DNS
                   |
                   v
             Cloudflare Pages
                   |
                   v
           Portfolio Website
             HTML / CSS / JS
```

### 2. Serverless Visitor Counter

```text
             User / Browser
                   |
                   v
             JavaScript Fetch
                   |
                   v
          Cloudflare Worker
             POST /visitors
                   |
                   v
             Workers KV
          (VISITOR_COUNT)
                   |
                   v
          Updated Visitor Count
                   |
                   v
             Browser Display
```

## AWS Infrastructure – Original Implementation

The original platform was deployed using AWS services and managed through Terraform.

Services implemented:

- Amazon S3 – Static website storage.
- Amazon CloudFront – Content delivery.
- CloudFront Origin Access Control – Secure S3 origin access.
- Amazon Route 53 – DNS configuration.
- AWS Certificate Manager – SSL/TLS certificate management.
- Amazon API Gateway – Visitor counter API.
- AWS Lambda – Serverless backend processing.
- Amazon DynamoDB – Visitor count storage.
- AWS IAM – Access control and permissions.

Terraform was used to provision and manage the AWS infrastructure.

The original AWS visitor counter and website delivery architecture were subsequently replaced in the live deployment by Cloudflare services.

## Cloudflare Implementation – Current Production Architecture

### Cloudflare Pages

- Hosts the portfolio website.
- Connects the custom domain `shashanktj.com`.
- Serves HTML, CSS, and JavaScript files.
- Provides HTTPS-enabled website delivery.

### Cloudflare Workers

- Implements the serverless visitor counter.
- Handles HTTP requests through the `/visitors` endpoint.
- Processes visitor count updates.
- Returns the updated count as a JSON response.

### Cloudflare Workers KV

- Stores the visitor count.
- Uses the `VISITOR_COUNT` namespace binding.
- Maintains the counter value between requests.

### Cloudflare DNS

- Manages authoritative DNS for the custom domain.
- Uses Cloudflare nameservers configured through Hostinger, the domain registrar.

## Infrastructure as Code

Terraform was used to manage the original AWS infrastructure.

Key implementation areas:

- AWS resource provisioning.
- S3 bucket security.
- CloudFront Origin Access Control.
- IAM permissions.
- DNS and certificate configuration.
- Terraform validation and infrastructure planning.

Commands used:

```bash
terraform init
terraform validate
terraform plan
terraform apply
terraform state list
```

## Technologies and Tools

| Category | Technologies |
|---|---|
| Cloud Platform | AWS, Cloudflare |
| Static Hosting | Cloudflare Pages, Amazon S3 |
| Serverless | Cloudflare Workers, AWS Lambda |
| Key-Value Storage | Cloudflare Workers KV |
| CDN | CloudFront |
| DNS | Cloudflare DNS, Route 53 |
| Security | IAM, OAC, HTTPS |
| Infrastructure as Code | Terraform |
| Programming | JavaScript, HTML, CSS |
| Version Control | Git, GitHub |
| Operating System | Windows, Linux |

## Testing and Validation

The following functionality was verified:

- Custom domain successfully resolves through Cloudflare.
- Portfolio website loads over HTTPS.
- Cloudflare Worker successfully responds to HTTP requests.
- Visitor count increments through POST requests.
- Visitor count persists in Cloudflare KV.
- Updated visitor count is displayed on the live website.
- GitHub changes are successfully pushed and deployed.

## Key Learning Outcomes

- Designing and deploying cloud-based web infrastructure.
- Managing AWS resources through Terraform.
- Understanding DNS management and nameserver migration.
- Implementing serverless applications using Cloudflare Workers.
- Using KV storage for persistent application data.
- Integrating frontend JavaScript with serverless APIs.
- Managing source code and deployment workflows using Git and GitHub.

## Author

**Shashank TJ**

Cloud & DevOps Enthusiast

- Portfolio: https://shashanktj.com
- GitHub: https://github.com/shashanksgitwithhub
- LinkedIn: https://www.linkedin.com/in/shashank-tj-s050724/
