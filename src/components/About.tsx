import { ArrowRight, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empowering Businesses with <span className="text-primary">Smart Tech Solutions</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Maxx Tech is a leading technology solutions provider based in Kenya, dedicated to helping businesses and individuals harness the power of modern technology. From WhatsApp bot deployment to custom web solutions, we bring innovation to your fingertips.
            </p>
            <p className="text-muted-foreground mb-8 text-lg">
              With years of experience and a team of passionate developers, we've helped hundreds of clients transform their digital presence and streamline their operations with cutting-edge automation solutions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "500+ Projects Delivered",
                "24/7 Support Available",
                "98% Client Satisfaction",
                "50+ Global Clients",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-primary mb-2">5+</div>
                <div className="text-xl text-muted-foreground">Years of Experience</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Fast Delivery</div>
                  <div className="text-muted-foreground text-sm">On-time, every time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
