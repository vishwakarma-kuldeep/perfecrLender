// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { AnimatePresence, motion } from "motion/react";
// import { ChevronDown, Menu, X } from "lucide-react";

// import type { NavigationItem } from "@/constants/navigation";

// type MobileNavProps = {
//   items: NavigationItem[];
//   cta: {
//     label: string;
//     href: string;
//   };
// };

// const menuVariants = {
//   hidden: {
//     opacity: 0,
//     y: -6,
//   },

//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.2,
//       ease: [0.16, 1, 0.3, 1],
//       when: "beforeChildren",
//       staggerChildren: 0.06,
//       delayChildren: 0.04,
//     },
//   },

//   exit: {
//     opacity: 0,
//     y: -4,
//     transition: {
//       duration: 0.16,
//       ease: [0.2, 0.8, 0.2, 1],
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: -5,
//   },

//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.18,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const dropdownVariants = {
//   hidden: {
//     height: 0,
//     opacity: 0,
//   },

//   visible: {
//     height: "auto",
//     opacity: 1,
//     transition: {
//       duration: 0.22,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },

//   exit: {
//     height: 0,
//     opacity: 0,
//     transition: {
//       duration: 0.16,
//       ease: [0.2, 0.8, 0.2, 1],
//     },
//   },
// };

// export function MobileNav({ items, cta }: MobileNavProps) {
//   const [open, setOpen] = useState(false);
//   const [expandedItem, setExpandedItem] = useState<string | null>(null);

//   useEffect(() => {
//     if (!open) {
//       document.body.style.overflow = "";
//       return;
//     }

//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   const closeMenu = () => {
//     setOpen(false);
//     setExpandedItem(null);
//   };

//   const toggleMenu = () => {
//     setOpen((current) => !current);
//   };

//   return (
//     <div className="lg:hidden">
//       {/* Menu Trigger */}
//       <motion.button
//         type="button"
//         onClick={toggleMenu}
//         aria-label={open ? "Close navigation menu" : "Open navigation menu"}
//         aria-expanded={open}
//         aria-controls="mobile-navigation"
//         whileTap={{ scale: 0.96 }}
//         className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
//       >
//         <AnimatePresence mode="wait" initial={false}>
//           {open ? (
//             <motion.span
//               key="close"
//               initial={{
//                 opacity: 0,
//                 rotate: -45,
//                 scale: 0.85,
//               }}
//               animate={{
//                 opacity: 1,
//                 rotate: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 rotate: 45,
//                 scale: 0.85,
//               }}
//               transition={{
//                 duration: 0.16,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="flex"
//             >
//               <X size={20} />
//             </motion.span>
//           ) : (
//             <motion.span
//               key="menu"
//               initial={{
//                 opacity: 0,
//                 rotate: 45,
//                 scale: 0.85,
//               }}
//               animate={{
//                 opacity: 1,
//                 rotate: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 rotate: -45,
//                 scale: 0.85,
//               }}
//               transition={{
//                 duration: 0.16,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="flex"
//             >
//               <Menu size={20} />
//             </motion.span>
//           )}
//         </AnimatePresence>
//       </motion.button>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             id="mobile-navigation"
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="absolute inset-x-0 top-full border-b border-border bg-background shadow-xl"
//           >
//             <motion.nav
//               className="mx-auto max-h-[calc(100vh-4rem)] max-w-7xl overflow-y-auto px-4 py-5 sm:px-6"
//               aria-label="Mobile navigation"
//             >
//               {/* Navigation Items */}
//               <motion.div className="space-y-1" variants={menuVariants}>
//                 {items.map((item) => (
//                   <motion.div key={item.href} variants={itemVariants}>
//                     {item.children ? (
//                       <>
//                         <div className="flex items-center">
//                           <Link
//                             href={item.href}
//                             onClick={closeMenu}
//                             className="flex-1 rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors duration-200 hover:bg-muted"
//                           >
//                             {item.label}
//                           </Link>

//                           <motion.button
//                             type="button"
//                             onClick={() =>
//                               setExpandedItem((current) =>
//                                 current === item.href ? null : item.href,
//                               )
//                             }
//                             aria-label={`Expand ${item.label}`}
//                             aria-expanded={expandedItem === item.href}
//                             whileTap={{ scale: 0.95 }}
//                             className="flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
//                           >
//                             <motion.span
//                               animate={{
//                                 rotate: expandedItem === item.href ? 180 : 0,
//                               }}
//                               transition={{
//                                 duration: 0.2,
//                                 ease: [0.16, 1, 0.3, 1],
//                               }}
//                             >
//                               <ChevronDown size={18} />
//                             </motion.span>
//                           </motion.button>
//                         </div>

//                         {/* Loan Submenu */}
//                         <AnimatePresence initial={false}>
//                           {expandedItem === item.href && (
//                             <motion.div
//                               variants={dropdownVariants}
//                               initial="hidden"
//                               animate="visible"
//                               exit="exit"
//                               className="overflow-hidden"
//                             >
//                               <div className="ml-3 border-l border-border pl-3">
//                                 {item.children.map((child) => (
//                                   <Link
//                                     key={child.href}
//                                     href={child.href}
//                                     onClick={closeMenu}
//                                     className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-muted hover:pl-4 hover:text-foreground"
//                                   >
//                                     {child.label}
//                                   </Link>
//                                 ))}
//                               </div>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </>
//                     ) : (
//                       <Link
//                         href={item.href}
//                         onClick={closeMenu}
//                         className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-all duration-200 hover:bg-muted hover:pl-4"
//                       >
//                         {item.label}
//                       </Link>
//                     )}
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* CTA */}
//               <motion.div
//                 variants={itemVariants}
//                 className="mt-5 border-t border-border pt-5"
//               >
//                 <Link
//                   href={cta.href}
//                   onClick={closeMenu}
//                   className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
//                 >
//                   {cta.label}
//                 </Link>
//               </motion.div>
//             </motion.nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";

import type { NavigationItem } from "@/constants/navigation";

type MobileNavProps = {
  items: NavigationItem[];
  cta: {
    label: string;
    href: string;
  };
};

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -6,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },

  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.16,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -5,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.18,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const dropdownVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },

  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.22,
      ease: [0.16, 1, 0.3, 1],
    },
  },

  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.16,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

export function MobileNav({ items, cta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setExpandedItem(null);
  };

  const toggleMenu = () => {
    setOpen((current) => !current);
  };

  return (
    <div className="lg:hidden">
      {/* Menu Trigger */}
      <motion.button
        type="button"
        onClick={toggleMenu}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        whileTap={{ scale: 0.96 }}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{
                opacity: 0,
                rotate: -45,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 45,
                scale: 0.85,
              }}
              transition={{
                duration: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex"
            >
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{
                opacity: 0,
                rotate: 45,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: -45,
                scale: 0.85,
              }}
              transition={{
                duration: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex"
            >
              <Menu size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 top-full border-b border-border bg-background shadow-xl"
          >
            <motion.nav
              className="mx-auto max-h-[calc(100vh-4rem)] max-w-7xl overflow-y-auto px-4 py-5 sm:px-6"
              aria-label="Mobile navigation"
            >
              {/* Navigation Items */}
              <motion.div className="space-y-1" variants={menuVariants}>
                {items.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    {item.children ? (
                      <>
                        <div className="flex items-center">
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className="flex-1 rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                          >
                            {item.label}
                          </Link>

                          <motion.button
                            type="button"
                            onClick={() =>
                              setExpandedItem((current) =>
                                current === item.href ? null : item.href,
                              )
                            }
                            aria-label={`Expand ${item.label}`}
                            aria-expanded={expandedItem === item.href}
                            whileTap={{ scale: 0.95 }}
                            className="flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          >
                            <motion.span
                              animate={{
                                rotate: expandedItem === item.href ? 180 : 0,
                              }}
                              transition={{
                                duration: 0.2,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                            >
                              <ChevronDown size={18} />
                            </motion.span>
                          </motion.button>
                        </div>

                        {/* Loan Submenu */}
                        <AnimatePresence initial={false}>
                          {expandedItem === item.href && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="ml-3 border-l border-border pl-3">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-muted hover:pl-4 hover:text-foreground"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-all duration-200 hover:bg-muted hover:pl-4"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={itemVariants}
                className="mt-5 border-t border-border pt-5"
              >
                <Link
                  href={cta.href}
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {cta.label}
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
