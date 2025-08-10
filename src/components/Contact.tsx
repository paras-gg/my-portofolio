import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Contact = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setsubject] = useState("");
  const [pesan, setPesan] = useState("");
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "wzentro@gmail.com",
      href: "mailto:wzentro@gmail.com"
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 851 1963 3506",
      href: "tel:+6285119633506"
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "balikpapan kota, Indonesia",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-500"
    }
  ];
  const handleKirim = () => {
    const serviceID = "service_2ac16hu";
    const templateID = "template_u1riy08";
    const publicKey = "pDbbZ1Q8rEbeEDGiL";

    const templateParams = {
      name: nama,
      subject: subject,
      email: email,
      message: pesan,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert("Pesan berhasil dikirim!");
        setNama("");
        setEmail("");
        setsubject("");
        setPesan("");
      })
      .catch((error) => {
        alert("Gagal mengirim pesan.");
        console.error(error);
      });
  };

  useEffect(() => {
    document.querySelectorAll(".judul5").forEach((e, i) => {
      gsap.to(e, {
        scrollTrigger: {
          trigger: e,
          start: "top 90%",
          toggleActions: "restart none none none"
        },
        duration: i === 0 ? 0.5 : 1,
        delay: i === 0 ? 0 : 0.5,
        text: i === 0 ? "mari " : "berkolaborasi",
        ease: "none"
      })
    })
  }, [])
  return (
    <section className="py-20 px-4 bg-muted/20" id="contact">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 judul5"></span>
            <span className="text-primary judul5"></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="zoom-out" data-aos-duration="2000">
            Punya proyek menarik? Mari diskusikan bagaimana kita bisa
            bekerja sama untuk mewujudkan ide Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green" data-aos="fade-right">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Kirim Pesan</CardTitle>
              <CardDescription>
                Isi form di bawah ini dan saya akan merespon sesegera mungkin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input
                    id="name"
                    placeholder="Nama lengkap Anda"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                    onChange={(e) => setNama(e.target.value)}
                    value={nama}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subjek</Label>
                <Input
                  id="subject"
                  placeholder="Subjek pesan Anda"
                  className="bg-background/50 border-primary/30 focus:border-primary"
                  onChange={(e) => setsubject(e.target.value)}
                  value={subject}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  placeholder="Ceritakan proyek atau ide Anda..."
                  rows={6}
                  className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                  onChange={(e) => setPesan(e.target.value)}
                  value={pesan}
                />
              </div>

              <Button
                className="w-full shadow-green hover:shadow-glow transition-all duration-300"
                size="lg"
                onClick={handleKirim}
              >
                <Send className="mr-2 h-5 w-5" />
                Kirim Pesan
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green" data-aos="flip-right">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Informasi Kontak</CardTitle>
                <CardDescription>
                  Jangan ragu untuk menghubungi saya melalui channel berikut.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <a
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green" data-aos="flip-right">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Ikuti Saya</CardTitle>
                <CardDescription>
                  Terhubung dengan saya di platform media sosial.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 ${social.color} transition-all duration-300 hover:scale-110`}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green" data-aos="flip-right">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-semibold text-primary mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  Biasanya merespon dalam waktu 24 jam
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;