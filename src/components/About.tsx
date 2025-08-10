import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const About = () => {
  const personalInfo = [
    { label: "Nama", value: "Zentro" },
    { label: "Lokasi", value: "balikpapan, Indonesia" },
    { label: "Email", value: "wzentro@gmail.com" },
    { label: "Pengalaman", value: "1+ Tahun" },
  ];

  const interests = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "video editing",
    "photo editing",
    "Open Source"
  ];
  useEffect(() => {
    const box = document.querySelectorAll(".box")
    document.querySelectorAll(".judul2").forEach((e, i) => {
      gsap.to(e, {
        scrollTrigger: {
          trigger: e,
          start: "top 90%",
          toggleActions: "restart none none none"
        },
        duration: 0.5,
        delay: i === 0 ? 0 : 0.5,
        text: i === 0 ? "Tentang " : "Saya",
        ease: "none"
      })
    })

    VanillaTilt.init(box, {
      max: 15,
      speed: 500,
      scale: 1.1,
      glare: true,
      "max-glare": 0.3,
    });

    return () => {
      box.forEach((el) => el.vanillaTilt?.destroy());
    }
  }, [])
  return (
    <section className="py-20 px-4" id="about">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 judul2"></span>
            <span className="text-primary judul2"></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="zoom-out" data-aos-duration="2000">
            Seorang developer yang selalu bersemangat untuk belajar teknologi baru
            dan menciptakan solusi yang memberikan dampak positif.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Personal Story */}
          <div className="space-y-6">
            <div className="box rounded-lg">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green" data-aos="zoom-out-right">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Perjalanan Saya</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Memulai perjalanan sebagai developer sejak 2024, saya telah mengembangkan
                    berbagai aplikasi web dan mobile. Fokus utama saya adalah menciptakan
                    pengalaman pengguna yang intuitif dan performa aplikasi yang optimal.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Saya percaya bahwa teknologi harus memudahkan hidup manusia, dan
                    setiap baris kode yang saya tulis ditujukan untuk mencapai tujuan tersebut.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Interests */}
            <div className="box rounded-lg">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green" data-aos="zoom-in-left">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Minat & Spesialisasi</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right - Personal Info */}
          <div className="space-y-6">
            <div className="box rounded-lg">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green" data-aos="flip-right">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Informasi Personal</h3>
                  <div className="space-y-4">
                    {personalInfo.map((info, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                        <span className="text-muted-foreground font-medium">{info.label}:</span>
                        <span className="text-foreground">{info.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="box rounded-lg">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green text-center" data-aos="flip-right">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">13+</div>
                    <div className="text-sm text-muted-foreground">Proyek Selesai</div>
                  </CardContent>
                </Card>
              </div>
              <div className="box rounded-lg">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green text-center" data-aos="flip-right">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Kepuasan Klien</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;