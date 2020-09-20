#!/usr/bin/emacs -Q --script
;;; install-org.el --- Install Org from ELPA  -*- lexical-binding: t; -*-

;;; Commentary:
;; Install Org from ELPA if it has not been selected before.

(require 'package)

;;; Code:

(package-initialize)

(unless (package--user-selected-p 'org)
  (let (
		;; Do not litter
		(make-backup-files nil)
		;; Tune garbage collection for speed
		(gc-cons-threshold 402653184)
		(gc-cons-percentage 0.6))
	(package-refresh-contents)
	(package-install
	 (cadr (assq 'gnu-elpa-keyring-update package-archive-contents)))
	(package-install (cadr (assq 'org package-archive-contents)))))

;;; install-org.el ends here
