provider "aws" {
  region = var.aws_region
}

resource "aws_security_group" "devops_sg" {

  name = "devops-security-group"

ingress {
  from_port   = 22
  to_port     = 22
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}

ingress {
  from_port   = 30080
  to_port     = 30080
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}

ingress {
  from_port   = 3000
  to_port     = 3000
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}

ingress {
  from_port   = 9090
  to_port     = 9090
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}

ingress {
  from_port   = 8082
  to_port     = 8082
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}

ingress {
  from_port   = 9100
  to_port     = 9100
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}

ingress {
  from_port   = 9113
  to_port     = 9113
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}

ingress {
  from_port   = 8081
  to_port     = 8081
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}

ingress {
  from_port   = 6443
  to_port     = 6443
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}
}

resource "aws_instance" "devops_server" {

  ami = "ami-07a00cf47dbbc844c"

  instance_type = var.instance_type

  key_name = var.key_name

  vpc_security_group_ids = [
    aws_security_group.devops_sg.id
  ]

  root_block_device {
    volume_size = 20
    volume_type = "gp3"
  }

  tags = {
    Name = "CloudPulse-DevOps-Server"
  }
}