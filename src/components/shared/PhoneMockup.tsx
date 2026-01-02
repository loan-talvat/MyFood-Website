"use client";

import { Camera, Utensils, Flame, Droplets, Wheat, Plus } from "lucide-react";
import { motion } from "framer-motion";

export function PhoneMockup() {
  return (
    <motion.div
      className="relative mx-auto w-[300px] h-[620px]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Phone Frame - Style iPhone moderne */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[3.5rem] shadow-2xl p-[3px]">
        {/* Inner bezel */}
        <div className="w-full h-full bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-[3.3rem] p-[2px]">
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[3.1rem] overflow-hidden relative">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20" />

            {/* Status Bar */}
            <div className="h-14 flex items-end justify-between px-8 pb-1 text-[10px] font-medium text-zinc-800">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="flex gap-[2px]">
                  <div className="w-[3px] h-[6px] bg-zinc-800 rounded-sm" />
                  <div className="w-[3px] h-[8px] bg-zinc-800 rounded-sm" />
                  <div className="w-[3px] h-[10px] bg-zinc-800 rounded-sm" />
                  <div className="w-[3px] h-[12px] bg-zinc-300 rounded-sm" />
                </div>
                <span>100%</span>
              </div>
            </div>

            {/* App Content */}
            <div className="px-5 py-2">
              {/* Greeting */}
              <div className="mb-4">
                <p className="text-xs text-zinc-400">Bonjour Marie</p>
                <p className="text-lg font-semibold text-zinc-800">Votre journée</p>
              </div>

              {/* Main Stats Card */}
              <div className="bg-gradient-to-br from-primary/90 to-primary rounded-3xl p-5 mb-4 text-white relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -right-4 top-8 w-16 h-16 bg-white/10 rounded-full" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-white/70 text-xs">Calories</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">1 450</span>
                        <span className="text-sm text-white/70">/ 2 000</span>
                      </div>
                    </div>
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                      <Flame className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "72%" }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                  <p className="text-xs text-white/70 mt-2">550 kcal restantes</p>
                </div>
              </div>

              {/* Macros */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-rose-50 rounded-2xl p-3 text-center"
                >
                  <div className="w-8 h-8 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-1">
                    <Droplets className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-[10px] text-zinc-400">Protéines</p>
                  <p className="text-sm font-semibold text-zinc-800">65g</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-amber-50 rounded-2xl p-3 text-center"
                >
                  <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-1">
                    <Wheat className="w-4 h-4 text-amber-500" />
                  </div>
                  <p className="text-[10px] text-zinc-400">Glucides</p>
                  <p className="text-sm font-semibold text-zinc-800">180g</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-sky-50 rounded-2xl p-3 text-center"
                >
                  <div className="w-8 h-8 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-1">
                    <Droplets className="w-4 h-4 text-sky-500" />
                  </div>
                  <p className="text-[10px] text-zinc-400">Lipides</p>
                  <p className="text-sm font-semibold text-zinc-800">48g</p>
                </motion.div>
              </div>

              {/* Recent Meals */}
              <p className="text-xs text-zinc-400 mb-2">Repas récents</p>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="bg-zinc-50 rounded-2xl p-3 flex items-center gap-3"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-orange-400 to-rose-400 rounded-xl flex items-center justify-center text-lg">
                    🥗
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-800">Déjeuner</p>
                    <p className="text-[10px] text-zinc-400">Salade César</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-zinc-800">520</p>
                    <p className="text-[10px] text-zinc-400">kcal</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                  className="bg-zinc-50 rounded-2xl p-3 flex items-center gap-3"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center text-lg">
                    🥐
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-800">Petit-déj</p>
                    <p className="text-[10px] text-zinc-400">Croissant & café</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-zinc-800">380</p>
                    <p className="text-[10px] text-zinc-400">kcal</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Tab Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-zinc-100 flex items-center justify-around px-6">
              <div className="flex flex-col items-center gap-1">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Flame className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[9px] text-primary font-medium">Accueil</span>
              </div>

              {/* Floating Action Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 -mt-6 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30"
              >
                <Camera className="w-6 h-6 text-white" />
              </motion.div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                  <Utensils className="w-4 h-4 text-zinc-400" />
                </div>
                <span className="text-[9px] text-zinc-400">Repas</span>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -right-4 top-24 bg-white rounded-2xl shadow-xl p-3 w-48 border border-zinc-100"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
            <Camera className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-xs font-medium text-zinc-800">Photo analysée!</p>
            <p className="text-[10px] text-zinc-400">Pâtes carbonara - 650 kcal</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
