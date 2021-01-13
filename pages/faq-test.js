import { motion } from "framer-motion";
import Header from "../components/Head";
import Navbar from "../components/ui/Navbar";
import Sidebar from "../components/ui/Sidebar";

const Faq = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar
            id="sidebarBlue"
            title="FAQ"
            text={
              <p className="text-white ml-10 mr-10  mt-10 mb-10 ">
                If you have any other questions you can always find us on
                <a
                  className="text-white font-bold text-base ml-1"
                  href="https://discord.com/invite/3GC6TJd"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </p>
            }
          />

          <div className="sm:w-2/3 xl:w-4/5 sm:min-h-screen">
            <Navbar className="anchorBlue" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="pl-20  pr-20 "
            >
              <motion.h1
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="text-black text-lg mt-6"
              >
                📈 Objective:
              </motion.h1>
              <motion.p
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="mt-2"
              >
                Carry out small basic projects in groups with the idea that they
                can experience teamwork: brainstorming, planning, use
                repositories such as GitHub or GitLab, design tools, learn to do
                pair-programming.
              </motion.p>
              <motion.h1
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="text-black text-lg mt-6"
              >
                👩‍💻 👨‍💻 Teams:
              </motion.h1>
              <motion.p
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="mt-2"
              >
                4 teams of maximum 5 people, so that communication is optimal
                and can be easily coordinated.
              </motion.p>
              <motion.h1
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="text-black text-lg mt-6"
              >
                👨‍🏫 👩‍🏫 Coordinators:
              </motion.h1>
              <motion.p
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="mt-2"
              >
                4 teams will be formed which will have a coordinator / who, in
                addition to participating like the rest, will also be the person
                in charge of monitoring the project in order to move forward. NO
                experience is required, it is just wanting to coordinate 😉
              </motion.p>
              <motion.h1
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="text-black text-lg mt-6"
              >
                🦾 Enriching experience:
              </motion.h1>
              <motion.p
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="mt-2"
              >
                We try to balance groups with people with little experience and
                others with at least some experience so that they can help each
                other.
              </motion.p>
              <motion.h1
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="text-black text-lg mt-6"
              >
                🤝 Support:
              </motion.h1>
              <motion.p
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="mt-2"
              >
                The FrontEndCafé team will give you help when you need it so
                that you can unblock planning problems, code or whatever you
                want. We are here to help you!
              </motion.p>
              <motion.h1
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="text-black text-lg mt-6"
              >
                🤖 Regarding Technologies (stack), they can choose to choose two
                paths:
              </motion.h1>
              <motion.p
                initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
                animate={{ x: 0, opacity: 1, color: "#000000" }}
                transition={{ delay: 0.3 }}
                className="mt-2"
              >
                Level 1 HTML, CSS and Javascript or Level 2 React.js / Node.js,
                optional CSS library.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
