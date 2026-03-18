import { useState } from "react";
import { X, ArrowLeft, MessageCircle, Zap } from "lucide-react";

const CheapGains = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to open */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-0 z-40 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-l-lg shadow-lg hover:scale-105 transition-transform"
        style={{ writingMode: "vertical-rl" }}
      >
        <Zap className="h-5 w-5 inline mr-2" />
        CHEAP GAINS
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative">
            {/* Close button top right */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Back button top left */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4 text-white/70 hover:text-white bg-white/10 rounded-full p-2 flex items-center gap-2 pr-3"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm">Back</span>
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-yellow-400">✦✦✦ C H E A P G A I N S ✦✦✦</h2>
              <p className="text-purple-400 font-bold">S O C I A L M E D I A B O O S T I N G P R I C E S</p>
            </div>

            {/* TikTok */}
            <div className="mb-4">
              <h3 className="text-pink-400 font-bold border-b border-white/20 pb-1 mb-2">𝐓𝐈𝐊𝐓𝐎𝐊 • 𝐆𝐀𝐈𝐍𝐒 • 𝐏𝐑𝐈𝐂𝐄𝐒</h3>
              <div className="text-sm font-mono space-y-1">
                <div className="flex justify-between"><span>1k Followers</span><span>360 bob</span></div>
                <div className="flex justify-between"><span>1k Likes</span><span>60 bob</span></div>
                <div className="flex justify-between"><span>1k Views</span><span>50 bob</span></div>
                <div className="flex justify-between"><span>1k Vid Saves</span><span>40 bob</span></div>
                <div className="flex justify-between"><span>1k Vid Shares</span><span>20 bob</span></div>
                <div className="flex justify-between"><span>Custom Vid Comments</span><span>50 bob</span></div>
                <div className="flex justify-between"><span>Livestream 1k Likes</span><span>30 bob</span></div>
              </div>
            </div>

            {/* Instagram */}
            <div className="mb-4">
              <h3 className="text-pink-400 font-bold border-b border-white/20 pb-1 mb-2">𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 • 𝐆𝐀𝐈𝐍𝐒 • 𝐏𝐑𝐈𝐂𝐄𝐒</h3>
              <div className="text-sm font-mono space-y-1">
                <div className="flex justify-between"><span>1k Followers</span><span>360 bob</span></div>
                <div className="flex justify-between"><span>1k Post Likes</span><span>60 bob</span></div>
                <div className="flex justify-between"><span>1k Views/Reels</span><span>30 bob</span></div>
                <div className="flex justify-between"><span>Custom Comments</span><span>50 bob</span></div>
                <div className="flex justify-between"><span>1k Story Views</span><span>50 bob</span></div>
              </div>
            </div>

            {/* Facebook */}
            <div className="mb-4">
              <h3 className="text-blue-400 font-bold border-b border-white/20 pb-1 mb-2">𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 • 𝐆𝐀𝐈𝐍𝐒 • 𝐏𝐑𝐈𝐂𝐄𝐒</h3>
              <div className="text-sm font-mono space-y-1">
                <div className="flex justify-between"><span>1k Page Followers</span><span>120 bob</span></div>
                <div className="flex justify-between"><span>1k Profile Followers</span><span>115 bob</span></div>
                <div className="flex justify-between"><span>1k Post Likes</span><span>60 bob</span></div>
                <div className="flex justify-between"><span>Custom Post Reactions</span><span>30 bob</span></div>
                <div className="flex justify-between"><span>1k Post Shares</span><span>210 bob</span></div>
                <div className="flex justify-between"><span>1k Group Members</span><span>200 bob</span></div>
                <div className="flex justify-between"><span>1k Video/Reel Views</span><span>50 bob</span></div>
                <div className="flex justify-between"><span>Custom Comments</span><span>200 bob</span></div>
              </div>
            </div>

            {/* YouTube */}
            <div className="mb-4">
              <h3 className="text-red-400 font-bold border-b border-white/20 pb-1 mb-2">𝐘𝐎𝐔𝐓𝐔𝐁𝐄 • 𝐆𝐀𝐈𝐍𝐒 • 𝐏𝐑𝐈𝐂𝐄𝐒</h3>
              <div className="text-sm font-mono space-y-1">
                <div className="flex justify-between"><span>1k Subscribers</span><span>DM</span></div>
                <div className="flex justify-between"><span>1k Video Views</span><span>300 bob</span></div>
                <div className="flex justify-between"><span>1k Video Likes</span><span>80 bob</span></div>
                <div className="flex justify-between"><span>Custom Comments</span><span>60 bob</span></div>
              </div>
            </div>

            {/* Twitter/X */}
            <div className="mb-4">
              <h3 className="text-gray-400 font-bold border-b border-white/20 pb-1 mb-2">𝐗/𝐓𝐖𝐈𝐓𝐓𝐄𝐑 • 𝐆𝐀𝐈𝐍𝐒 • 𝐏𝐑𝐈𝐂𝐄𝐒</h3>
              <div className="text-sm font-mono space-y-1">
                <div className="flex justify-between"><span>1k Likes</span><span>200 bob</span></div>
                <div className="flex justify-between"><span>Retweets/Reposts</span><span>DM</span></div>
              </div>
            </div>

            {/* Telegram */}
            <div className="mb-4">
              <h3 className="text-blue-300 font-bold border-b border-white/20 pb-1 mb-2">𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌 • 𝐆𝐀𝐈𝐍𝐒 • 𝐏𝐑𝐈𝐂𝐄𝐒</h3>
              <div className="text-sm font-mono space-y-1">
                <div className="flex justify-between"><span>1k Group/Channel Members</span><span>250 bob</span></div>
                <div className="flex justify-between"><span>1k Post Views</span><span>8 bob</span></div>
                <div className="flex justify-between"><span>1k Post Reactions</span><span>20 bob</span></div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="mb-4">
              <h3 className="text-green-400 font-bold border-b border-white/20 pb-1 mb-2">𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 • 𝐂𝐇𝐀𝐍𝐍𝐄𝐋𝐒</h3>
              <div className="text-sm font-mono space-y-1">
                <div className="flex justify-between"><span>1k WhatsApp Followers</span><span>450 bob</span></div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-6 pt-4 border-t border-white/20">
              <div className="flex justify-center gap-2 mb-3 text-yellow-400">
                <span>🔥 No logins required</span>
                <span>🔥 No passwords needed</span>
              </div>
              <p className="text-sm text-purple-300 mb-3">Only profile or post links required</p>
              <a
                href="https://wa.me/254725979273?text=Hey%20Maxx%20I%20want%20social%20media%20boosting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-bold"
              >
                <MessageCircle className="h-5 w-5" />
                DM: +254 725 979 273
              </a>
              <p className="text-xs text-white/50 mt-4">© 2025 — ALL RIGHTS RESERVED — MAXX TECH</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheapGains;
