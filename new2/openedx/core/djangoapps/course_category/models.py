# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from model_utils.models import TimeStampedModel
from django.utils.translation import ugettext_lazy as _


class CourseCategory(TimeStampedModel):
    name = models.CharField(_('Course Category'), max_length=100)

    class Meta(object):
        verbose_name = 'CourseCategory'
        verbose_name_plural = 'CourseCategory'

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name
