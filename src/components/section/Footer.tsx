'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@/components/icons/GithubIcon';
import ForkIcon from '@/components/icons/ForkIcon';
import StarIcon from '@/components/icons/StarIcon';
import useInView from '@/hooks/useInView';
import { config } from '@/config/config';
import { GitHubInfo } from '@/types/types';

const Footer: React.FC = () => {
  const [{ stars, forks }, setGitHubInfo] = useState<GitHubInfo>({
    stars: null,
    forks: null,
  });

  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const { hasBeenInView } = useInView(footerRef, { threshold: 0.1 });

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    fetch(`https://api.github.com/repos/Anurag03singh/portfolio`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({ stars: stargazers_count, forks: forks_count });
      })
      .catch((e) => console.error(e));
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeInOut' },
    },
  };

  return (
    <footer
      ref={footerRef}
      className="w-full p-6 lg:px-12 flex flex-col items-center"
    >
      <motion.ul
        className="flex items-center xl:hidden space-x-8 mb-8"
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
        variants={variants}
      >
        <li>
          <a
            href={config.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-bluebell dark:hover:text-bluebell focus:text-bluebell dark:focus:text-bluebell"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </li>
      </motion.ul>
      <motion.div
        className="font-serif font-medium text-center text-sm text-gray-700 dark:text-gray-300"
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
        variants={variants}
      >
        <a
          href={config.portfolioRepository}
          className="text-gray-700 dark:text-gray-300 hover:text-bluebell dark:hover:text-bluebell focus:text-bluebell dark:focus:text-bluebell"
          aria-label="Portfolio"
        >
          <div className="hover:text-bluebell dark:hover:text-bluebell">
            Built with 💜 by Anurag Singh &copy; {year}
          </div>
          {stars !== null && forks !== null && (
            <div className="mt-2 flex justify-center items-center space-x-4">
              <span className="flex items-center space-x-1">
                <StarIcon />
                <span>{stars}</span>
              </span>
              <span className="flex items-center space-x-1">
                <ForkIcon />
                <span>{forks}</span>
              </span>
            </div>
          )}
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
