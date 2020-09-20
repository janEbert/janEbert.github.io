#!/usr/bin/emacs -Q --script
;;; make.el --- Build script for the website  -*- lexical-binding: t; -*-

;;; Commentary:
;; Script to build the website.

(require 'org)
(require 'ob-core)
(require 'ob-emacs-lisp)
;; Not required but do it just in case.
(require 'files)

;;; Code:

(let ((org-confirm-babel-evaluate nil)
	  ;; Do not litter
	  (make-backup-files nil)
	  ;; Tune garbage collection for speed
	  (gc-cons-threshold 402653184)
	  (gc-cons-percentage 0.6)
	  ;; Lexical binding in Org Babel code by default
	  (org-babel-default-header-args:emacs-lisp
	   (cons '(:lexical . "yes") org-babel-default-header-args:emacs-lisp)))
  (message "publishing with Org %s" org-version)
  (org-babel-load-file "publish.org"))

;;; make.el ends here
