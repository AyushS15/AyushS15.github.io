import React, { useState } from 'react';
import { Container, Header, Content, Sidebar, Navbar, Nav, Panel, Grid, Row, Col, Avatar, Divider, Tag, Message, Button, ButtonToolbar, IconButton, Timeline, TagGroup } from 'rsuite';
import PageIcon from '@rsuite/icons/Page';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import DetailIcon from '@rsuite/icons/Detail';
import GithubIcon from '@rsuite/icons/legacy/Github';
import BookIcon from '@rsuite/icons/legacy/Book';
import EnvelopeIcon from '@rsuite/icons/legacy/Envelope';
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import { aboutData, publicationsData, resumeData } from './data.js';

function App() {
  const [activeKey, setActiveKey] = useState('about');

  return (
    <Container className="app-container">
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--rs-bg-overlay)', padding: 20, borderRight: '1px solid var(--rs-border-primary)' }}
        width={320}
      >
        <div style={{ textAlign: 'center', marginBottom: 20, marginTop: 20 }}>
          <Avatar size="xxl" circle src={aboutData.avatar} alt="Ayush" style={{ marginBottom: 20, width: 120, height: 120 }} />
          <h3 style={{ marginBottom: 10 }}>{aboutData.name}</h3>
          <p style={{ color: 'var(--rs-text-secondary)', fontSize: 14 }}>{aboutData.role}</p>
        </div>
        <Divider />
        <Nav activeKey={activeKey} onSelect={setActiveKey} appearance="subtle" vertical style={{ flex: 1, fontSize: 16 }}>
          <Nav.Item eventKey="about" icon={<UserInfoIcon />}>About Me</Nav.Item>
          <Nav.Item eventKey="resume" icon={<DetailIcon />}>Resume</Nav.Item>
          <Nav.Item eventKey="publications" icon={<PageIcon />}>Publications</Nav.Item>
        </Nav>
        <div style={{ textAlign: 'center', paddingBottom: 20 }}>
          <IconButton icon={<GithubIcon />} href={aboutData.links.github} target="_blank" appearance="subtle" circle size="lg" />
          <IconButton icon={<BookIcon />} href={aboutData.links.scholar} target="_blank" appearance="subtle" circle size="lg" />
          <IconButton icon={<EnvelopeIcon />} href={`mailto:${aboutData.links.email}`} appearance="subtle" circle size="lg" />
        </div>
      </Sidebar>
      
      <Container>
        <Header>
          <Navbar appearance="subtle" style={{ padding: '10px 20px', borderBottom: '1px solid var(--rs-border-primary)' }}>
            <Navbar.Brand style={{ fontSize: 18, fontWeight: 'bold' }}>{aboutData.name}</Navbar.Brand>
            <Nav pullRight>
              <Nav.Item href={aboutData.links.github} target="_blank" icon={<GithubIcon />}>GitHub</Nav.Item>
            </Nav>
          </Navbar>
        </Header>
        
        <Content style={{ padding: '40px', overflowY: 'auto' }}>
          {activeKey === 'about' && (
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <Panel header={<h2 style={{ marginBottom: 0 }}>👋 Hi, I'm Ayush</h2>} bordered shaded style={{ marginBottom: 30 }}>
                <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>{aboutData.bio1}</p>
                <p style={{ fontSize: 16, lineHeight: 1.8 }}>{aboutData.bio2}</p>
              </Panel>

              <Row gutter={30}>
                <Col xs={24} md={12}>
                  <Panel header={<h4 style={{ marginBottom: 0 }}>🔭 {aboutData.research.title}</h4>} bordered shaded style={{ height: '100%' }}>
                    <p style={{ whiteSpace: 'pre-line', marginBottom: 20, color: 'var(--rs-text-secondary)', lineHeight: 1.6 }}>
                      {aboutData.research.content}
                    </p>
                    <Message type="info" showIcon>
                      {aboutData.research.highlight}
                    </Message>
                  </Panel>
                </Col>
                <Col xs={24} md={12}>
                  <Panel header={<h4 style={{ marginBottom: 0 }}>🧩 {aboutData.outside.title}</h4>} bordered shaded style={{ height: '100%' }}>
                    <p style={{ color: 'var(--rs-text-secondary)', lineHeight: 1.6 }}>{aboutData.outside.content}</p>
                  </Panel>
                </Col>
              </Row>
            </div>
          )}

          {activeKey === 'resume' && (
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                <h2 style={{ margin: 0 }}>Resume</h2>
                <Button appearance="primary" color="cyan" href="/resume.pdf" target="_blank" download>
                  <FileDownloadIcon style={{ marginRight: 8 }} /> Download PDF
                </Button>
              </div>

              <Row gutter={30}>
                <Col xs={24} md={14}>
                  <Panel header={<h4 style={{ marginBottom: 0 }}>Experience</h4>} bordered shaded style={{ marginBottom: 30 }}>
                    <Timeline align="left">
                      {resumeData.experience.map((exp, idx) => (
                        <Timeline.Item key={idx}>
                          <p style={{ fontWeight: 'bold', fontSize: 16, color: 'var(--rs-text-primary)' }}>{exp.role}</p>
                          <p style={{ color: 'var(--rs-primary-500)', fontWeight: 600, fontSize: 14 }}>{exp.company}</p>
                          <p style={{ fontSize: 12, color: 'var(--rs-text-secondary)', marginBottom: 10 }}>{exp.date}</p>
                          <ul style={{ paddingLeft: 15, margin: 0, color: 'var(--rs-text-secondary)', lineHeight: 1.6 }}>
                            {exp.details.map((desc, dIdx) => <li key={dIdx}>{desc}</li>)}
                          </ul>
                        </Timeline.Item>
                      ))}
                    </Timeline>
                  </Panel>

                  <Panel header={<h4 style={{ marginBottom: 0 }}>Education</h4>} bordered shaded style={{ marginBottom: 30 }}>
                    <Timeline align="left">
                      {resumeData.education.map((edu, idx) => (
                        <Timeline.Item key={idx}>
                          <p style={{ fontWeight: 'bold', fontSize: 16, color: 'var(--rs-text-primary)' }}>{edu.degree}</p>
                          <p style={{ color: 'var(--rs-primary-500)', fontWeight: 600, fontSize: 14 }}>{edu.institution}</p>
                          <p style={{ fontSize: 12, color: 'var(--rs-text-secondary)', marginBottom: 10 }}>{edu.date}</p>
                          <ul style={{ paddingLeft: 15, margin: 0, color: 'var(--rs-text-secondary)', lineHeight: 1.6 }}>
                            {edu.details.map((desc, dIdx) => <li key={dIdx}>{desc}</li>)}
                          </ul>
                        </Timeline.Item>
                      ))}
                    </Timeline>
                  </Panel>
                  <Panel header={<h4 style={{ marginBottom: 0 }}>Projects</h4>} bordered shaded style={{ marginBottom: 30 }}>
                    <Timeline align="left">
                      {resumeData.projects.map((proj, idx) => (
                        <Timeline.Item key={idx}>
                          <p style={{ fontWeight: 'bold', fontSize: 16, color: 'var(--rs-text-primary)' }}>{proj.name}</p>
                          <p style={{ color: 'var(--rs-primary-500)', fontWeight: 600, fontSize: 14 }}>{proj.category}</p>
                          <ul style={{ paddingLeft: 15, margin: 0, color: 'var(--rs-text-secondary)', lineHeight: 1.6, marginTop: 5 }}>
                            {proj.details.map((desc, dIdx) => <li key={dIdx}>{desc}</li>)}
                          </ul>
                        </Timeline.Item>
                      ))}
                    </Timeline>
                  </Panel>
                </Col>

                <Col xs={24} md={10}>
                  <Panel header={<h4 style={{ marginBottom: 15 }}>Skills</h4>} bordered shaded style={{ marginBottom: 30 }}>
                    <p style={{ fontWeight: 600, marginBottom: 10, color: 'var(--rs-primary-500)' }}>Languages</p>
                    <TagGroup style={{ marginBottom: 20 }}>
                      {resumeData.skills.languages.map((skill, i) => <Tag key={i} color="cyan">{skill}</Tag>)}
                    </TagGroup>

                    <p style={{ fontWeight: 600, marginBottom: 10, color: 'var(--rs-primary-500)' }}>Libraries, Frameworks & Tools</p>
                    <TagGroup style={{ marginBottom: 20 }}>
                      {resumeData.skills.tools.map((skill, i) => <Tag key={i} color="blue">{skill}</Tag>)}
                    </TagGroup>
                  </Panel>

                  <Panel header={<h4 style={{ marginBottom: 15 }}>Honors & Awards</h4>} bordered shaded>
                    <ul style={{ paddingLeft: 15, margin: 0, color: 'var(--rs-text-secondary)', lineHeight: 1.6 }}>
                      {resumeData.awards.map((award, i) => <li key={i} style={{ marginBottom: 10 }}>{award}</li>)}
                    </ul>
                  </Panel>
                </Col>
              </Row>
            </div>
          )}

          {activeKey === 'publications' && (
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <h2 style={{ marginBottom: 30 }}>Publications</h2>
              {publicationsData.map(pub => (
                <Panel key={pub.id} bordered shaded style={{ marginBottom: 25 }}>
                  <h4 style={{ marginBottom: 12 }}>{pub.title}</h4>
                  <p style={{ color: 'var(--rs-text-primary)', fontWeight: 'bold', fontSize: 15 }}>{pub.authors}</p>
                  <p style={{ color: 'var(--rs-primary-500)', marginBottom: 15, fontSize: 14 }}>{pub.venue} • {pub.date}</p>
                  <p style={{ fontStyle: 'italic', marginBottom: 20, color: 'var(--rs-text-secondary)' }}>"{pub.excerpt}"</p>
                  
                  <div style={{ background: 'var(--rs-bg-well)', padding: '15px 20px', borderRadius: 8, marginBottom: 20 }}>
                    <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--rs-text-secondary)', lineHeight: 1.6 }}>
                      {pub.highlights.map((hl, idx) => (
                        <li key={idx} style={{ marginBottom: 8 }}>{hl}</li>
                      ))}
                    </ul>
                  </div>

                  <ButtonToolbar>
                    <Button appearance="primary" href={pub.links.paper} target="_blank">PDF / ArXiv</Button>
                    <Button appearance="ghost" href={pub.links.bibtex} target="_blank">BibTeX</Button>
                  </ButtonToolbar>
                </Panel>
              ))}
            </div>
          )}
        </Content>
      </Container>
    </Container>
  );
}

export default App;
