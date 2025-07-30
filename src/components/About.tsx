import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const personalInfo = [
    { label: "Nama", value: "Nama Anda" },
    { label: "Lokasi", value: "Jakarta, Indonesia" },
    { label: "Email", value: "email@example.com" },
    { label: "Pengalaman", value: "3+ Tahun" },
  ];

  const interests = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud Computing",
    "Machine Learning",
    "Open Source"
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tentang <span className="text-primary">Saya</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seorang developer yang selalu bersemangat untuk belajar teknologi baru 
            dan menciptakan solusi yang memberikan dampak positif.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Personal Story */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Perjalanan Saya</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Memulai perjalanan sebagai developer sejak 2021, saya telah mengembangkan 
                  berbagai aplikasi web dan mobile. Fokus utama saya adalah menciptakan 
                  pengalaman pengguna yang intuitif dan performa aplikasi yang optimal.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Saya percaya bahwa teknologi harus memudahkan hidup manusia, dan 
                  setiap baris kode yang saya tulis ditujukan untuk mencapai tujuan tersebut.
                </p>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green">
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

          {/* Right - Personal Info */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green">
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

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Proyek Selesai</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Kepuasan Klien</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;