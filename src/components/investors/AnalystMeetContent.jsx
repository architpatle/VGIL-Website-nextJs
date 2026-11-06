"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import {
  Calendar,
  FileText,
  Play,
  Pause,
  Volume2,
  VolumeX,
  BarChart3,
  Users,
  Headphones,
  Info,
  ArrowRight
} from 'lucide-react';

const AnalystMeetContent = () => {
  // Audio Player State
  const audioRef = useRef(null);
  const [playingUrl, setPlayingUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  const meets = [
    {
      id: 'meet-1',
      date: 'Aug 21, 2026',
      theme: 'orange',
      iconName: 'calendar',
      files: [
        {
          title: 'Intimation Investor Meet',
          type: 'PDF',
          url: '/assets/.pdf/Investor Analyst-Meet/Investor_Meet_21_08_2026.pdf',
          iconType: 'pdf'
        },
      ]
    },
    {
      id: 'meet-2',
      date: 'Jun 03, 2026',
      theme: 'orange',
      iconName: 'calendar',
      files: [
        {
          title: 'Intimation Investor Meet',
          type: 'PDF',
          url: '/assets/.pdf/Investor Analyst-Meet/Intimation_Investor_Meet.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Investor Presentation',
          type: 'PDF',
          url: '/assets/.pdf/Investor Analyst-Meet/Investors_Presentation.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Audio Recording - Investor Earning Conference Call Dated June 03, 2026',
          type: 'AUDIO',
          url: '/assets/recording/Investor_Earning_Conference_Call_Dated_June_03_2026.mp3',
          iconType: 'audio'
        },
        {
          title: 'Transcript of Earnings Conference Call',
          type: 'PDF',
          url: '/assets/.pdf/Investor Analyst-Meet/Transcript_of_Earnings_Conference_Call.pdf',
          iconType: 'pdf'
        },
      ]
    },
    {
      id: 'meet-3',
      date: 'Mar 06, 2026',
      theme: 'orange',
      iconName: 'calendar',
      files: [
        {
          title: 'Intimation of Schedule of Investor Meetings',
          type: 'PDF',
          url: '/assets/.pdf/Investor Analyst-Meet/VIRTUAL_02032026190329_Intimation_of_Schedule_of_Investor_meetings-06-March-2026 (1).pdf',
          iconType: 'pdf'
        }
      ]
    },
    {
      id: 'meet-4',
      date: 'Nov 28, 2025',
      theme: 'orange',
      iconName: 'calendar',
      files: [
        {
          title: 'Earnings Conference Call',
          type: 'PDF',
          url: '/assets/.pdf/Investor Analyst-Meet/Earnings_Conference_Call-28-November-2025.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Investors Presentation',
          type: 'PDF',
          url: '/assets/.pdf/Investor Analyst-Meet/Investor_Presentation.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Audio Recording - Investor-Analyst Call dated Nov 28, 2025',
          type: 'AUDIO',
          url: '/assets/recording/Virtual-Galaxy-Infotech-Limited-on-28th-November-2025.mp3',
          iconType: 'audio'
        },
        {
          title: 'Transcript of Investor-Analyst Call dated 28-11-2025',
          type: 'PDF',
          url: '/assets/.pdf/Investor Analyst-Meet/Transcript_of_Investor-Analyst_Call_dated-28-11-2025.pdf',
          iconType: 'pdf'
        }
      ]
    },
    {
      id: 'meet-5',
      date: 'Jun 20, 2025',
      theme: 'orange',
      iconName: 'calendar',
      files: [
        {
          title: 'Virtual Galaxy Invite',
          type: 'PDF',
          url: '/assets/.pdf/Investor Analyst-Meet/Virtual Galaxy Invite.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Short Presentation',
          type: 'PDF',
          url: '/assets/.pdf/Investor Analyst-Meet/virtual-galaxy-mar25-short.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Virtual Galaxy Investor Meet Audio (20-06-2025)',
          type: 'AUDIO',
          url: '/assets/recording/Virtual-Galaxy-Infotech-Limited-20062025.mp3',
          iconType: 'audio'
        }
      ]
    }
  ];

  // Helper to retrieve the appropriate Lucide icon component
  const getMeetIcon = (iconName) => {
    switch (iconName) {
      case 'chart':
        return <BarChart3 className="company-icon-svg" />;
      case 'users':
        return <Users className="company-icon-svg" />;
      case 'audio':
        return <Headphones className="company-icon-svg" />;
      case 'calendar':
      default:
        return <Calendar className="company-icon-svg" />;
    }
  };

  // Play / Pause handler
  const handlePlayPause = (url) => {
    if (playingUrl === url) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(err => console.log('Playback error:', err));
        setIsPlaying(true);
      }
    } else {
      setPlayingUrl(url);
      setIsPlaying(true);
      setCurrentTime(0);
      setDuration(0);

      // Delay source change to ensure ref element is parsed/updated
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.src = url;
          audioRef.current.load();
          audioRef.current.volume = isMuted ? 0 : volume;
          audioRef.current.playbackRate = playbackRate;
          audioRef.current.play().catch(err => console.log('Playback error:', err));
        }
      }, 50);
    }
  };

  // Sync state values with Audio elements
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
    if (audioRef.current) {
      audioRef.current.volume = val;
      audioRef.current.muted = val === 0;
    }
  };

  const handleToggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (audioRef.current) {
      audioRef.current.muted = nextMute;
    }
  };

  const handleSpeedChange = (rate) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  // Format seconds to MM:SS
  const formatTime = (timeInSecs) => {
    if (isNaN(timeInSecs)) return '0:00';
    const mins = Math.floor(timeInSecs / 60);
    const secs = Math.floor(timeInSecs % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Clean up playback when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="promotion-related-entities-container" style={{ marginTop: '0' }}>
      {/* HTML5 Audio Tag */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <div className="company-rows-list">
        {meets.map((meet, idx) => (
          <div
            key={meet.id}
            className="company-row-card effect-fade-up"
            style={{
              animationDelay: `${idx * 0.08}s`,
              flexDirection: 'column',
              alignItems: 'stretch'
            }}
          >
            {/* Top row with details */}
            <div
              className="d-flex flex-column flex-md-row align-items-md-center w-100 gap-4"
              style={{ gap: '24px' }}
            >
              {/* Left Brand Badge & Name */}
              <div className="company-info-col" style={{ width: '100%', maxWidth: '280px' }}>
                <div className={`company-brand-icon theme-${meet.theme}`}>
                  {getMeetIcon(meet.iconName)}
                </div>
                <h3 className="company-name">{meet.date}</h3>
              </div>

              {/* Vertical divider on desktop, hidden or modified on mobile */}
              <div className="company-vertical-divider d-none d-md-block" style={{ height: '48px' }}></div>

              {/* Right Cards List */}
              <div className="company-docs-col">
                {meet.files.map((file, fIdx) => (
                  <div key={fIdx} className="fy-doc-card" style={{ width: '100%', maxWidth: '300px' }}>
                    <div className="fy-doc-info" style={{ flex: '1', minWidth: '0', marginRight: '12px' }}>
                      <span
                        className="fy-doc-year"
                        title={file.title}
                        style={{
                          display: 'block',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          width: '100%'
                        }}
                      >
                        {file.title}
                      </span>
                      <span className="fy-doc-label">{file.type}</span>
                    </div>

                    {file.iconType === 'audio' ? (
                      <button
                        type="button"
                        onClick={() => handlePlayPause(file.url)}
                        className="fy-doc-download-btn"
                        style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
                        aria-label="Play or pause audio recording"
                      >
                        {playingUrl === file.url && isPlaying ? (
                          <Pause className="fy-download-icon" />
                        ) : (
                          <Play className="fy-download-icon" style={{ marginLeft: '2px' }} />
                        )}
                      </button>
                    ) : (
                      <a
                        href={file.url}
                        target="_blank"
                        className="fy-doc-download-btn"
                        aria-label={`Open ${file.title}`}
                      >
                        <FileText className="fy-download-icon" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Custom player section at the bottom of the card if it contains the playing audio file */}
            {meet.files.some(f => f.iconType === 'audio' && f.url === playingUrl) && (
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '16px' }}>
                <div
                  className="am-playing-title"
                  style={{
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#ff4d00',
                    marginBottom: '8px',
                    textAlign: 'left',
                    paddingLeft: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Headphones size={14} className="am-playing-icon" />
                  <span style={{ textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.5px', background: '#ffebe5', padding: '2px 8px', borderRadius: '6px', marginRight: '4px' }}>
                    {isPlaying ? 'Playing' : 'Paused'}
                  </span>
                  {meet.files.find(f => f.iconType === 'audio' && f.url === playingUrl)?.title}
                </div>

                <div className="am-audio-player" style={{ marginTop: '0' }}>
                  <button
                    type="button"
                    onClick={() => handlePlayPause(playingUrl)}
                    className="am-audio-btn"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
                  </button>

                  <div className="am-audio-timeline">
                    <span className="am-audio-time">{formatTime(currentTime)}</span>
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleSeek}
                      className="am-slider-input"
                      style={{
                        background: `linear-gradient(to right, #ff4d00 ${(currentTime / (duration || 100)) * 100}%, #e2e8f0 ${(currentTime / (duration || 100)) * 100}%)`
                      }}
                      aria-label="Playback seek progress"
                    />
                    <span className="am-audio-time">{formatTime(duration)}</span>
                  </div>

                  <div className="am-audio-controls-right">
                    <select
                      value={playbackRate}
                      onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
                      className="am-audio-speed"
                      aria-label="Playback speed selector"
                    >
                      <option value="1">1.0x</option>
                      <option value="1.25">1.25x</option>
                      <option value="1.5">1.5x</option>
                      <option value="2">2.0x</option>
                    </select>

                    <div className="am-audio-volume">
                      <button
                        type="button"
                        onClick={handleToggleMute}
                        className="am-audio-vol-btn"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      </button>
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="am-audio-vol-slider"
                        style={{
                          background: `linear-gradient(to right, #ff4d00 ${(isMuted ? 0 : volume) * 100}%, #e2e8f0 ${(isMuted ? 0 : volume) * 100}%)`
                        }}
                        aria-label="Volume slider"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Support Banner */}
      <div
        className="investor-help-banner effect-fade-up"
        style={{ animationDelay: `${meets.length * 0.08}s` }}
      >
        <div className="help-banner-left">
          <div className="help-banner-icon-wrap">
            <Info className="help-banner-icon" />
          </div>
          <div className="help-banner-text">
            <h4 className="help-banner-title">Need any help?</h4>
            <p className="help-banner-desc">
              If you need any specific document or have any queries, feel free to contact our investor relations team.
            </p>
          </div>
        </div>
        <div className="help-banner-right">
          <Link href="/contact" className="btn-help-banner-cta">
            Get in Touch
            <span className="btn-help-banner-icon-wrap">
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalystMeetContent;
