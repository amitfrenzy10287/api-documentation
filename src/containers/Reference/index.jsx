import React from 'react';
import { Header, SubHeader, Container, Content } from './styles';
const Reference =()=>{
    return (
        <Container>
            <Header>Reference to APIs & Services</Header>
            <SubHeader>Simple Guide to how to use forge APIs and Services</SubHeader>
            <Content>
                Even though Representational State Transfer,
                also known as REST, is often referred to as a protocol,
                it’s an architectural style. It defines how applications
                communicate over the Hypertext Transfer Protocol (HTTP).
                Applications that use REST are loosely-coupled and transfer
                information quickly and efficiently. While REST doesn’t define data
                formats, it’s usually associated with exchanging JSON or XML
                documents between a client and a server.
            </Content>
            <Content>
                We’re going to use a simple service and a web browser to learn about the fundamentals of REST.
            </Content>
            <Content>
                For this tutorial, you’ll need a system with Docker installed.
                You can find the instructions for your computer here.
                First, follow the instructions and install Docker.
                Then, once you’ve completed the installation, you can download and run our sample REST server.
            </Content>
        </Container>
    );
};

export default Reference;