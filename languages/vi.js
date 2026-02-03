module.exports = {
    meta: {
        name: "Vietnamese",
        code: "vi"
    },
    help: {
        command: {
            name: "help",
            description: "Xem thông tin về bot và các lệnh",
            category: {
                name: "category",
                description: "Chọn danh mục để xem",
                choices: {
                    main: "🏠 Menu Chính",
                    music: "🎵 Lệnh Nhạc",
                    playlist: "📋 Lệnh Playlist",
                    basic: "📌 Lệnh Cơ Bản",
                    utility: "🔧 Tiện Ích"
                }
            }
        },
        categories: {
            main: {
                name: "Menu Chính",
                emoji: "🏠",
                description: "Chào mừng đến với menu trợ giúp"
            },
            music: {
                name: "Lệnh Nhạc",
                emoji: "🎵",
                description: "Điều khiển phát nhạc và cài đặt"
            },
            playlist: {
                name: "Lệnh Playlist",
                emoji: "📋",
                description: "Quản lý playlist của bạn"
            },
            basic: {
                name: "Lệnh Cơ Bản",
                emoji: "⚙️",
                description: "Thông tin chung và tiện ích"
            },
            utility: {
                name: "Tiện Ích",
                emoji: "🔧",
                description: "Các tính năng tiện ích bổ sung"
            }
        },
        mainMenu: {
            header: {
                title: "# 🎵 {botName} - Trợ Giúp",
                welcome: "**Chào mừng đến với {botName}!**",
                subtitle: "Người bạn đồng hành âm nhạc trên Discord."
            },
            statistics: {
                title: "## 📊 Thống Kê",
                commands: "• **Lệnh:** {totalCommands}",
                servers: "• **Máy chủ:** {totalServers}",
                users: "• **Người dùng:** {totalUsers}",
                uptime: "• **Uptime:** {uptimeString}",
                ping: "• **Ping:** {ping}ms"
            },
            categories: {
                title: "## 📂 Danh Mục",
                music: "{emoji} **{name}** - {count} lệnh",
                playlist: "{emoji} **{name}** - {count} lệnh",
                basic: "{emoji} **{name}** - {count} lệnh",
                utility: "{emoji} **{name}** - {count} lệnh",
                footer: "**Chọn danh mục bên dưới để xem chi tiết.**"
            },
            footer: {
                version: "**Phiên bản 1.4**",
                developer: "Phát triển bởi bunpro nguồn (GlaceYT)"
            },
            selectMenu: {
                placeholder: "📂 Chọn danh mục để xem lệnh...",
                musicDescription: "{count} lệnh khả dụng",
                playlistDescription: "{count} lệnh khả dụng",
                basicDescription: "{count} lệnh khả dụng",
                utilityDescription: "{count} lệnh khả dụng"
            },
            buttons: {
                supportServer: "Support Server",
                github: "GitHub"
            }
        },
        categoryPage: {
            noCommands: {
                title: "## ❌ Không Có Lệnh",
                message: "Không có lệnh nào trong danh mục **{categoryName}**.",
                backToHelp: "Dùng `/help` để quay lại menu chính."
            },
            header: {
                title: "# {emoji} {categoryName}",
                description: "{description}",
                count: "**{count}** lệnh khả dụng"
            },
            commands: {
                title: "## Lệnh",
                titlePaginated: "## Lệnh (Trang {currentPage}/{totalPages})",
                item: "**{num}.** `/{commandName}`\n   {description}",
                noDescription: "Không có mô tả."
            },
            footer: {
                version: "**Phiên bản 1.4**",
                developer: "Phát triển bởi bunpro nguồn (GlaceYT)"
            },
            buttons: {
                backToMain: "🏠 Về Menu Chính",
                supportServer: "Support Server",
                github: "GitHub"
            }
        },
        errors: {
            general: "❌ **Có lỗi khi tải menu trợ giúp.**",
            fallback: "❌ Có lỗi khi tải menu trợ giúp.",
            fallbackDetails: "**Bot:** {botName}\n**Lệnh:** {totalCommands}\n**Máy chủ:** {totalServers}\n**Hỗ trợ:** {supportServer}"
        }
    },
    language: {
        command: {
            name: "language",
            description: "Thiết lập ngôn ngữ cho server",
            option: {
                name: "lang",
                description: "Chọn ngôn ngữ"
            }
        },
        current: {
            title: "🌐 Ngôn Ngữ Hiện Tại",
            description: "Ngôn ngữ hiện tại của server là: **{language}**",
            global: "Mặc định toàn cục (từ config): **{language}**"
        },
        changed: {
            title: "✅ Đã Đổi Ngôn Ngữ",
            description: "Ngôn ngữ server đã đổi thành: **{language}**",
            note: "Bot sẽ dùng ngôn ngữ này cho tất cả lệnh trong server."
        },
        available: {
            title: "📚 Ngôn Ngữ Khả Dụng",
            description: "Chọn một ngôn ngữ trong danh sách:",
            list: "**Danh sách ngôn ngữ:**\n{list}",
            item: "• **{name}** (`{code}`)"
        },
        errors: {
            notFound: "❌ **Không tìm thấy ngôn ngữ!**\nNgôn ngữ `{code}` không tồn tại.",
            failed: "❌ **Không thể đổi ngôn ngữ!**\n{error}",
            noPermission: "❌ **Bạn không có quyền đổi ngôn ngữ!**\nCần quyền `Manage Server`."
        },
        info: {
            title: "ℹ️ Thông Tin Ngôn Ngữ",
            description: "**Ngôn ngữ server:** {serverLang}\n**Ngôn ngữ mặc định:** {globalLang}\n\n**Số ngôn ngữ:** {count}",
            reset: "Để về mặc định, dùng `/language reset`"
        }
    },
    ping: {
        command: {
            name: "ping",
            description: "Kiểm tra độ trễ của bot"
        },
        header: {
            title: "# 🏓 Độ Trễ Bot",
            botName: "**{botName}** - Prime Music Bot",
            subtitle: "Kiểm tra thời gian phản hồi và kết nối"
        },
        metrics: {
            title: "## ⚡ Chỉ Số Hiệu Năng",
            responseTime: "**Thời gian phản hồi:** {latency}ms",
            websocketPing: "**Websocket Ping:** {ping}ms",
            botUptime: "**Uptime:** {uptime}",
            connectionSpeed: {
                excellent: "🟢 Kết nối rất tốt",
                good: "🟡 Kết nối tốt",
                slow: "🔴 Kết nối chậm"
            }
        },
            footer: {
                version: "**Phiên bản 1.4**",
                developer: "Phát triển bởi bunpro nguồn (GlaceYT)"
            },
        errors: {
            title: "## ❌ Lỗi",
            message: "Có lỗi khi kiểm tra độ trễ.\nVui lòng thử lại.",
            fallback: "❌ Có lỗi khi kiểm tra độ trễ."
        }
    },
    stats: {
        command: {
            name: "stats",
            description: "Xem thống kê bot và server"
        },
        header: {
            title: "# 📊 Thống Kê Bot",
            botName: "**{botName}**",
            developer: "Phát triển bởi bunpro nguồn (GlaceYT)"
        },
        botInfo: {
            title: "## 📊 Thông Tin Bot",
            servers: "• **Máy chủ:** {count}",
            users: "• **Người dùng:** {count}",
            channels: "• **Kênh:** {count}",
            uptime: "• **Uptime:** {uptime}"
        },
        musicStats: {
            title: "## 🎵 Thống Kê Nhạc",
            activePlayers: "• **Player đang hoạt động:** {count}",
            totalPlayers: "• **Tổng player:** {count}",
            currentTrack: "• **Bài đang phát:** {track}"
        },
        systemInfo: {
            title: "## 💻 Thông Tin Hệ Thống",
            cpu: "• **CPU:** {cpu}",
            platform: "• **Nền tảng:** {platform}",
            nodejs: "• **Node.js:** {version}",
            discordjs: "• **Discord.js:** {version}"
        },
        memory: {
            title: "## 💾 Bộ Nhớ & Hiệu Năng",
            memoryUsage: "**Bộ nhớ sử dụng:**",
            used: "• Đã dùng: {used}",
            total: "• Tổng: {total}",
            systemMemory: "**Bộ nhớ hệ thống:**",
            systemUsed: "• Đã dùng: {used}",
            systemFree: "• Còn trống: {free}",
            performance: "**Hiệu năng:**",
            ping: "• Ping: {ping}ms",
            shards: "• Shards: {count}",
            commands: "• Lệnh: {count}"
        },
            footer: {
                version: "**Phiên bản 1.4**",
                developer: "Phát triển bởi bunpro nguồn (GlaceYT)"
            },
        errors: {
            title: "## ❌ Lỗi",
            message: "Có lỗi khi lấy thống kê.\nVui lòng thử lại.",
            fallback: "❌ Có lỗi khi lấy thống kê."
        }
    },
    support: {
        command: {
            name: "support",
            description: "Lấy link hỗ trợ và các link quan trọng"
        },
        header: {
            title: "# 🆘 Hỗ Trợ & Liên Kết",
            botName: "**{botName}** - Prime Music Bot",
            subtitle: "Nhận hỗ trợ, báo lỗi hoặc kết nối với chúng tôi!"
        },
        links: {
            title: "## 🔗 Liên Kết Quan Trọng",
            supportServer: {
                title: "**📢 Support Server**",
                description: "Tham gia Discord để được hỗ trợ và cập nhật!",
                link: "[Nhấn vào đây để tham gia]({url})"
            },
            github: {
                title: "**💻 GitHub**",
                description: "Xem mã nguồn và đóng góp!",
                link: "[Truy cập GitHub]({url})"
            },
            youtube: {
                title: "**🎬 YouTube**",
                description: "Xem hướng dẫn và cập nhật!",
                link: "[Theo dõi]({url})"
            },
            website: {
                title: "**🌐 Website**",
                description: "Truy cập website chính thức!",
                link: "[Truy cập Website]({url})"
            }
        },
            footer: {
                version: "**Phiên bản 1.4**",
                developer: "Phát triển bởi bunpro nguồn (GlaceYT)"
            },
        buttons: {
            supportServer: "Support Server",
            github: "GitHub",
            youtube: "YouTube"
        },
        errors: {
            title: "## ❌ Lỗi",
            message: "Có lỗi khi lấy thông tin hỗ trợ.\nVui lòng thử lại.",
            fallback: "❌ Có lỗi khi lấy thông tin hỗ trợ."
        }
    },
    music: {
        autoplay: {
            command: {
                name: "autoplay",
                description: "Bật/tắt autoplay cho server"
            },
            enabled: {
                title: "## ✅ Đã Bật Autoplay",
                message: "Autoplay đã được **bật** cho server này.",
                note: "🎵 Bot sẽ tự phát bài tương tự khi hết queue."
            },
            disabled: {
                title: "## ❌ Đã Tắt Autoplay",
                message: "Autoplay đã được **tắt** cho server này.",
                note: "⏹️ Bot sẽ dừng khi hết queue."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi cập nhật autoplay.\nVui lòng thử lại."
            }
        },
        pause: {
            command: {
                name: "pause",
                description: "Tạm dừng bài hiện tại"
            },
            success: {
                title: "## ⏸️ Đã Tạm Dừng",
                message: "Bài hiện tại đã được tạm dừng.",
                note: "Dùng `/resume` để tiếp tục."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi tạm dừng.\nVui lòng thử lại."
            }
        },
        resume: {
            command: {
                name: "resume",
                description: "Tiếp tục phát bài hiện tại"
            },
            success: {
                title: "## ▶️ Đã Tiếp Tục",
                message: "Bài hiện tại đã tiếp tục phát.",
                note: "Nhạc đang phát."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi tiếp tục.\nVui lòng thử lại."
            }
        },
        skip: {
            command: {
                name: "skip",
                description: "Bỏ qua bài hiện tại"
            },
            success: {
                title: "## ⏭️ Đã Bỏ Qua",
                message: "Bài hiện tại đã bị bỏ qua.",
                nextSong: "Đang phát bài tiếp theo...",
                queueEmpty: "Queue trống."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi bỏ qua.\nVui lòng thử lại."
            }
        },
        stop: {
            command: {
                name: "stop",
                description: "Dừng nhạc và hủy player"
            },
            success: {
                title: "## ⏹️ Đã Dừng Nhạc",
                message24_7: "Đã dừng nhạc. Player vẫn giữ (bật 24/7).",
                messageNormal: "Đã dừng nhạc và hủy player.",
                note: "Dùng `/play` để phát lại."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi dừng nhạc.\nVui lòng thử lại."
            }
        },
        volume: {
            command: {
                name: "volume",
                description: "Đặt âm lượng"
            },
            invalid: {
                title: "## ❌ Âm Lượng Không Hợp Lệ",
                message: "Âm lượng phải từ **0** đến **100**.",
                note: "Vui lòng nhập mức hợp lệ."
            },
            success: {
                title: "## 🔊 Đã Cập Nhật Âm Lượng",
                message: "Âm lượng đã đặt: **{volume}%**.",
                muted: "🔇 Tắt tiếng",
                low: "🔈 Thấp",
                medium: "🔊 Vừa",
                high: "🔊🔊 Cao"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi đặt âm lượng.\nVui lòng thử lại."
            }
        },
        shuffle: {
            command: {
                name: "shuffle",
                description: "Xáo trộn hàng chờ"
            },
            queueEmpty: {
                title: "## ❌ Queue Trống",
                message: "Queue trống, không thể xáo trộn.",
                note: "Thêm bài bằng `/play`."
            },
            success: {
                title: "## 🔀 Đã Xáo Trộn",
                message: "Queue đã được xáo trộn thành công!",
                count: "**{count}** bài đã được sắp xếp lại."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi xáo trộn.\nVui lòng thử lại."
            }
        },
        np: {
            command: {
                name: "np",
                description: "Hiển thị bài đang phát với thanh tiến trình"
            },
            title: "## 🎵 Đang Phát",
            nowPlaying: "**[{title}]({uri})**",
            by: "bởi **{author}**",
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi lấy bài hiện tại.\nVui lòng thử lại."
            }
        },
        queue: {
            command: {
                name: "queue",
                description: "Xem hàng chờ hiện tại"
            },
            title: "## 📋 Hàng Chờ Hiện Tại",
            titlePaginated: "## 📋 Hàng Chờ Hiện Tại (Trang {currentPage}/{totalPages})",
            nowPlaying: "🎵 **Đang phát:**",
            track: "[{title}]({uri})",
            requestedBy: "Yêu cầu bởi: {requester}",
            trackNumber: "**{number}.**",
            noMoreSongs: "Không còn bài",
            buttons: {
                previous: "⬅️ Trước",
                next: "Tiếp ➡️"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi lấy hàng chờ.\nVui lòng thử lại."
            }
        },
        remove: {
            command: {
                name: "remove",
                description: "Xóa bài khỏi queue theo vị trí"
            },
            queueEmpty: {
                title: "## ❌ Queue Trống",
                message: "Queue trống. Không có bài để xóa.",
                note: "Thêm bài bằng `/play`."
            },
            invalidPosition: {
                title: "## ❌ Vị Trí Không Hợp Lệ",
                message: "Vị trí phải từ **1** đến **{max}**.",
                note: "Queue có **{count}** bài."
            },
            success: {
                title: "## ✅ Đã Xóa Bài",
                removed: "**Đã xóa:** [{title}]({uri})",
                position: "**Vị trí:** {position}",
                message: "Bài đã được xóa khỏi queue."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi xóa bài.\nVui lòng thử lại."
            }
        },
        move: {
            command: {
                name: "move",
                description: "Di chuyển bài trong queue"
            },
            queueEmpty: {
                title: "## ❌ Queue Trống",
                message: "Queue trống. Không có bài để di chuyển.",
                note: "Thêm bài bằng `/play`."
            },
            invalidPosition: {
                title: "## ❌ Vị Trí Không Hợp Lệ",
                message: "Vị trí phải từ **1** đến **{max}**.",
                note: "Queue có **{count}** bài."
            },
            success: {
                title: "## ✅ Đã Di Chuyển",
                moved: "**Đã di chuyển:** [{title}]({uri})",
                from: "**Từ vị trí:** {from}",
                to: "**Đến vị trí:** {to}"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi di chuyển bài.\nVui lòng thử lại."
            }
        },
        jump: {
            command: {
                name: "jump",
                description: "Nhảy đến bài ở vị trí trong queue"
            },
            queueEmpty: {
                title: "## ❌ Queue Trống",
                message: "Queue trống. Không có bài để nhảy.",
                note: "Thêm bài bằng `/play`."
            },
            invalidPosition: {
                title: "## ❌ Vị Trí Không Hợp Lệ",
                message: "Vị trí phải từ **1** đến **{max}**.",
                note: "Queue có **{count}** bài."
            },
            success: {
                title: "## ✅ Đang Phát Bài Được Chọn",
                message: "Đã nhảy đến bài ở vị trí **{position}**.",
                note: "Đang phát bài đã chọn."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi nhảy bài.\nVui lòng thử lại."
            }
        },
        trackinfo: {
            command: {
                name: "trackinfo",
                description: "Xem thông tin bài đang phát"
            },
            title: "## 🎵 Thông Tin Bài",
            fields: {
                title: "**Tên:** {title}",
                author: "**Tác giả:** {author}",
                duration: "**Thời lượng:** {duration}",
                requester: "**Yêu cầu bởi:** {requester}",
                source: "**Nguồn:** {source}",
                queue: "**Số bài trong queue:** {count}",
                loop: "**Lặp:** {loop}",
                volume: "**Âm lượng:** {volume}%"
            },
            status: {
                playing: "Đang phát",
                paused: "Đang tạm dừng",
                stopped: "Đã dừng",
                queue: "Queue: {count} bài"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi lấy thông tin bài.\nVui lòng thử lại."
            }
        },
        clear: {
            command: {
                name: "clear",
                description: "Xóa toàn bộ queue"
            },
            queueEmpty: {
                title: "## ❌ Queue Trống",
                message: "Queue trống. Không có gì để xóa."
            },
            success: {
                title: "## ✅ Đã Xóa Queue",
                message: "Tất cả bài trong queue đã bị xóa."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi xóa queue.\nVui lòng thử lại."
            }
        },
        loop: {
            command: {
                name: "loop",
                description: "Bật/tắt lặp bài hoặc queue"
            },
            off: {
                title: "## ❌ Tắt Lặp",
                message: "Đã tắt chế độ lặp."
            },
            track: {
                title: "## 🔁 Lặp Bài",
                message: "Đang lặp bài hiện tại."
            },
            queue: {
                title: "## 🔁 Lặp Queue",
                message: "Đang lặp toàn bộ queue."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi đổi chế độ lặp.\nVui lòng thử lại."
            }
        },
        seek: {
            command: {
                name: "seek",
                description: "Tua đến thời gian trong bài"
            },
            invalid: {
                title: "## ❌ Thời Gian Không Hợp Lệ",
                message: "Vui lòng nhập thời gian hợp lệ (giây)."
            },
            success: {
                title: "## ✅ Đã Tua",
                message: "Đã tua đến **{time}**."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi tua.\nVui lòng thử lại."
            }
        },
        search: {
            command: {
                name: "search",
                description: "Tìm kiếm bài và chọn từ kết quả"
            },
            results: {
                title: "## 🔎 Kết Quả Tìm Kiếm",
                query: "Từ khóa: **{query}**",
                track: "**{number}.** [{title}]({uri})\n   Tác giả: {author}\n   Thời lượng: {duration}"
            },
            buttons: {
                cancel: "Hủy"
            },
            playlistNotSupported: {
                title: "## ❌ Không Hỗ Trợ Playlist",
                message: "Chưa hỗ trợ phát playlist từ kết quả tìm kiếm.",
                note: "Hãy dùng `/play` với link playlist."
            },
            noResults: {
                title: "## ❌ Không Có Kết Quả",
                message: "Không tìm thấy bài nào.",
                note: "Hãy thử từ khóa khác."
            },
            lavalinkManagerError: {
                title: "## ❌ Lỗi Lavalink Manager",
                message: "Lavalink node manager chưa được khởi tạo.",
                note: "Hãy liên hệ admin."
            },
            noNodes: {
                title: "## ❌ Không Có Node Lavalink",
                message: "Hiện không có node Lavalink nào khả dụng ({connected}/{total} đang kết nối).",
                note: "Bot đang cố kết nối lại. Vui lòng thử sau."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi tìm kiếm.\nVui lòng thử lại."
            }
        },
        play: {
            command: {
                name: "play",
                description: "Phát nhạc từ tên hoặc link"
            },
            success: {
                titleTrack: "## 🎵 Đã Thêm Bài",
                titlePlaylist: "## 🎶 Đã Thêm Playlist",
                trackAdded: "Bài đã được thêm vào queue.",
                playlistAdded: "Đã thêm **{count}** bài vào queue.",
                nowPlaying: "Đang phát ngay.",
                queueReady: "Bài đã sẵn sàng trong queue."
            },
            invalidResponse: {
                title: "## ❌ Dữ Liệu Không Hợp Lệ",
                message: "Phản hồi từ Lavalink không hợp lệ.",
                note: "Vui lòng thử lại."
            },
            noResults: {
                title: "## ❌ Không Có Kết Quả",
                message: "Không tìm thấy bài nào.",
                note: "Hãy thử từ khóa khác."
            },
            spotifyError: {
                title: "## ❌ Lỗi Spotify",
                message: "Không thể lấy dữ liệu Spotify.",
                note: "Hãy thử lại hoặc dùng link khác."
            },
            lavalinkManagerError: {
                title: "## ❌ Lỗi Lavalink Manager",
                message: "Lavalink node manager chưa được khởi tạo.",
                note: "Hãy liên hệ admin."
            },
            noNodes: {
                title: "## ❌ Không Có Node Lavalink",
                message: "Hiện không có node Lavalink nào khả dụng ({connected}/{total} đang kết nối).",
                note: "Bot đang cố kết nối lại. Vui lòng thử sau."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi xử lý yêu cầu.\nVui lòng thử lại."
            }
        }
    },
    playlist: {
        createplaylist: {
            command: {
                name: "createplaylist",
                description: "Tạo playlist mới"
            },
            alreadyExists: {
                title: "## ❌ Playlist Đã Tồn Tại",
                message: "Playlist **\"{name}\"** đã tồn tại.",
                note: "Vui lòng chọn tên khác."
            },
            success: {
                title: "## ✅ Đã Tạo Playlist",
                message: "Playlist **\"{name}\"** đã được tạo."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi tạo playlist.\nVui lòng thử lại."
            }
        },
        addplaylist: {
            command: {
                name: "addplaylist",
                description: "Thêm playlist công khai"
            },
            notFound: {
                title: "## ❌ Không Tìm Thấy Playlist",
                message: "Playlist **\"{name}\"** không tồn tại.",
                note: "Vui lòng kiểm tra lại tên."
            },
            success: {
                title: "## ✅ Đã Thêm Playlist",
                message: "Playlist **\"{name}\"** đã được thêm."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi thêm playlist.\nVui lòng thử lại."
            }
        },
        removeplaylist: {
            command: {
                name: "removeplaylist",
                description: "Xóa playlist khỏi danh sách của bạn"
            },
            notFound: {
                title: "## ❌ Không Tìm Thấy Playlist",
                message: "Playlist **\"{name}\"** không tồn tại."
            },
            success: {
                title: "## ✅ Đã Xóa Playlist",
                message: "Playlist **\"{name}\"** đã được xóa."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi xóa playlist.\nVui lòng thử lại."
            }
        },
        addSong: {
            command: {
                name: "addsong",
                description: "Thêm bài vào playlist"
            },
            notFound: {
                title: "## ❌ Không Tìm Thấy Playlist",
                message: "Playlist **\"{name}\"** không tồn tại."
            },
            success: {
                title: "## ✅ Đã Thêm Bài",
                song: "**Bài:** {song}",
                playlist: "**Playlist:** {playlist}",
                message: "Bài đã được thêm vào playlist."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi thêm bài.\nVui lòng thử lại."
            }
        },
        deleteplaylist: {
            command: {
                name: "deleteplaylist",
                description: "Xóa playlist của bạn"
            },
            notFound: {
                title: "## ❌ Không Tìm Thấy Playlist",
                message: "Playlist **\"{name}\"** không tồn tại."
            },
            accessDenied: {
                title: "## 🔒 Không Có Quyền",
                message: "Bạn không có quyền xóa playlist này.",
                note: "Chỉ chủ playlist mới có thể xóa."
            },
            success: {
                title: "## ✅ Đã Xóa Playlist",
                message: "Playlist **\"{name}\"** đã được xóa thành công."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi xóa playlist.\nVui lòng thử lại."
            }
        },
        deletesong: {
            command: {
                name: "deletesong",
                description: "Xóa bài khỏi playlist"
            },
            notFound: {
                title: "## ❌ Không Tìm Thấy Playlist",
                message: "Playlist **\"{name}\"** không tồn tại.",
                note: "Vui lòng kiểm tra lại tên."
            },
            success: {
                title: "## ✅ Đã Xóa Bài",
                song: "**Bài:** {song}",
                playlist: "**Playlist:** {playlist}",
                message: "Bài đã được xóa khỏi playlist."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi xóa bài.\nVui lòng thử lại."
            }
        },
        savequeue: {
            command: {
                name: "savequeue",
                description: "Lưu queue hiện tại thành playlist"
            },
            queueEmpty: {
                title: "## ❌ Queue Trống",
                message: "Queue trống, không có gì để lưu.",
                note: "Thêm bài rồi thử lại."
            },
            alreadyExists: {
                title: "## ❌ Playlist Đã Tồn Tại",
                message: "Playlist **\"{name}\"** đã tồn tại.",
                note: "Vui lòng chọn tên khác."
            },
            success: {
                title: "## ✅ Đã Lưu Queue",
                message: "Queue đã được lưu thành playlist **\"{name}\"**",
                tracks: "**Số bài:** {count}"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi lưu queue.\nVui lòng thử lại."
            }
        },
        myplaylists: {
            command: {
                name: "myplaylists",
                description: "Danh sách playlist của bạn"
            },
            noPlaylists: {
                title: "## 📋 Chưa Có Playlist",
                message: "Bạn chưa tạo playlist nào.",
                note: "Dùng `/createplaylist` để tạo."
            },
            title: "## 📂 Playlist Của Bạn (Trang {currentPage}/{totalPages})",
            playlistItem: "**{number}.** **{name}**\n   • Hiển thị: **{visibility}**\n   • Server: {server}\n   • Bài: **{count}**",
            visibilityPrivate: "🔒 Riêng tư",
            visibilityPublic: "🌐 Công khai",
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi lấy playlist.\nVui lòng thử lại."
            }
        },
        allplaylists: {
            command: {
                name: "allplaylists",
                description: "Danh sách playlist công khai"
            },
            noPlaylists: {
                title: "## 📋 Không Có Playlist",
                message: "Không có playlist công khai nào.",
                note: "Tạo playlist công khai bằng `/createplaylist`!"
            },
            title: "## 🌐 Playlist Công Khai (Trang {currentPage}/{totalPages})",
            playlistItem: "**{number}.** **{name}**\n   • Tạo bởi: {creator}\n   • Server: {server}\n   • Bài: **{count}**",
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi lấy playlist công khai.\nVui lòng thử lại."
            }
        },
        showsongs: {
            command: {
                name: "showsongs",
                description: "Xem các bài trong playlist"
            },
            notFound: {
                title: "## ❌ Không Tìm Thấy Playlist",
                message: "Playlist **\"{name}\"** không tồn tại.",
                note: "Vui lòng kiểm tra lại tên."
            },
            accessDenied: {
                title: "## 🔒 Không Có Quyền",
                message: "Bạn không có quyền xem playlist này.",
                note: "Playlist riêng tư chỉ chủ mới xem được."
            },
            empty: {
                title: "## 📋 Bài Trong \"{name}\"",
                message: "Playlist trống. Thêm bài bằng `/addsong`!"
            },
            title: "## 🎵 Bài Trong \"{name}\" (Trang {currentPage}/{totalPages})",
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi hiển thị bài.\nVui lòng thử lại."
            }
        },
        playcustomplaylist: {
            command: {
                name: "playcustomplaylist",
                description: "Phát playlist tùy chỉnh"
            },
            notFound: {
                title: "## ❌ Không Tìm Thấy Playlist",
                message: "Playlist **\"{name}\"** không tồn tại.",
                note: "Vui lòng kiểm tra lại."
            },
            accessDenied: {
                title: "## 🔒 Không Có Quyền",
                message: "Bạn không có quyền phát playlist này.",
                note: "Playlist riêng tư chỉ chủ mới phát được."
            },
            empty: {
                title: "## ❌ Playlist Trống",
                message: "Playlist **\"{name}\"** đang trống.",
                note: "Thêm bài trước khi phát."
            },
            lavalinkManagerError: {
                title: "## ❌ Lỗi Lavalink Manager",
                message: "Lavalink node manager chưa được khởi tạo.",
                note: "Hãy liên hệ admin."
            },
            noNodes: {
                title: "## ❌ Không Có Node Lavalink",
                message: "Hiện không có node Lavalink nào khả dụng ({connected}/{total} đang kết nối).",
                note: "Bot đang cố kết nối lại. Vui lòng thử sau."
            },
            resolveError: {
                title: "## ❌ Lỗi Resolve Bài",
                message: "Không thể resolve một hoặc nhiều bài trong playlist.",
                note: "Vui lòng kiểm tra playlist."
            },
            success: {
                title: "## 🎵 Đang Phát Playlist",
                message: "Đang phát playlist **\"{name}\"**",
                songs: "**Số bài:** {count}"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi phát playlist.\nVui lòng thử lại."
            }
        }
    },
    utility: {
        twentyfourseven: {
            command: {
                name: "247",
                description: "Bật/tắt chế độ 24/7"
            },
            accessDenied: {
                title: "## ❌ Không Có Quyền",
                message: "Chỉ chủ server mới bật/tắt 24/7."
            },
            enabled: {
                title: "## ✅ Đã Bật 24/7",
                message: "Chế độ 24/7 đã **bật** cho server này.",
                note: "🔄 Bot sẽ ở lại kênh voice khi hết queue."
            },
            disabled: {
                title: "## ❌ Đã Tắt 24/7",
                message: "Chế độ 24/7 đã **tắt** cho server này.",
                note: "⏹️ Bot sẽ rời kênh khi hết queue."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi cập nhật 24/7.\nVui lòng thử lại.",
                note: "Vui lòng thử lại."
            }
        },
        history: {
            command: {
                name: "history",
                description: "Xem lịch sử phát gần đây"
            },
            noHistory: {
                title: "## 📜 Không Có Lịch Sử",
                message: "Chưa có lịch sử phát cho server này.",
                note: "Phát vài bài để tạo lịch sử!"
            },
            title: "## 📜 Lịch Sử Phát (Trang {currentPage}/{totalPages})",
            titlePaginated: "## 📜 Lịch Sử Phát (Trang {currentPage}/{totalPages})",
            noMoreSongs: "- Không còn bài trong lịch sử.",
            buttons: {
                previous: "⬅️ Trước",
                next: "Tiếp ➡️"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi lấy lịch sử.",
                note: "Vui lòng thử lại."
            }
        }
    },
    events: {
        interactionCreate: {
            noGuild: "❌ **Lệnh này chỉ dùng trong server.**",
            commandNotFound: "❌ **Không tìm thấy lệnh!**",
            noPermission: "❌ **Bạn không có quyền dùng lệnh này.**",
            errorOccurred: "❌ **Có lỗi xảy ra: {message}**",
            unexpectedError: "❌ **Lỗi không mong muốn. Vui lòng thử lại.**",
            errorTryAgain: "❌ Có lỗi xảy ra. Vui lòng thử lại."
        }
    },
    utils: {
        voiceChannelCheck: {
            noVoiceChannel: {
                title: "## ❌ Chưa Vào Kênh Voice",
                message: "Bạn cần vào kênh voice để dùng lệnh này.",
                note: "Hãy vào kênh voice rồi thử lại."
            },
            wrongChannel: {
                title: "## 🎵 Vào Đúng Kênh Voice",
                message: "Bot đang hoạt động ở **{channelName}**.",
                note: "Hãy vào **{channelName}** để dùng lệnh nhạc."
            }
        },
        playerValidation: {
            queueEmpty: {
                title: "## ❌ Queue Trống",
                message: "Queue trống. Không có bài nào.",
                note: "Thêm bài bằng `/play`."
            },
            noSongPlaying: {
                title: "## ❌ Không Có Bài Đang Phát",
                message: "Hiện không có bài nào đang phát.",
                note: "Dùng `/play` để phát nhạc."
            },
            noMusicPlaying: {
                title: "## ❌ Không Có Nhạc",
                message: "Không có bài đang phát và queue trống.",
                note: "Dùng `/play` để phát nhạc."
            }
        },
        responseHandler: {
            defaultError: {
                title: "## ❌ Lỗi",
                message: "Có lỗi khi xử lý lệnh.",
                note: "Vui lòng thử lại."
            },
            commandError: "❌ Có lỗi khi xử lý lệnh {commandName}."
        }
    },
    console: {
        bot: {
            clientLogged: "Đăng nhập thành công: {tag}",
            musicSystemReady: "Hệ thống nhạc Riffy đã sẵn sàng 🎵",
            lavalinkError: "Lỗi khởi tạo player: {message}",
            nodeManagerStatus: "Node Manager: {available}/{total} node sẵn sàng",
            nodeStatus: "Trạng thái node:",
            nodeInfo: "{icon} {name} ({host}:{port}) - {status}{error}",
            commandsLoaded: "Tổng lệnh đã tải: {count}",
            commandLoadFailed: "Không thể tải: {name} - Thiếu data hoặc run",
            commandLoadError: "Lỗi tải {name}: {message}",
            tokenVerification: "🔐 KIỂM TRA TOKEN",
            tokenAuthFailed: "Xác thực thất bại ❌",
            tokenError: "Lỗi: Bật intents hoặc reset token",
            databaseOnline: "MongoDB Online ✅",
            databaseStatus: "🕸️  TRẠNG THÁI DATABASE",
            databaseConnection: "🕸️  KẾT NỐI DATABASE",
            databaseFailed: "Kết nối thất bại ❌",
            databaseError: "Lỗi: {message}",
            unhandledRejection: "Unhandled Rejection:",
            uncaughtException: "Uncaught Exception:",
            riffyThumbnailError: "[ Riffy ] Bỏ qua lỗi thumbnail: {message}"
        },
        events: {
            rest: {
                commandsRegistered: "Đã đăng ký {count} lệnh (/) toàn cục ✅",
                commandsFailed: "Đăng ký lệnh thất bại ❌",
                error: "Lỗi: {message}",
                details: "Chi tiết: {details}"
            },
            interaction: {
                commandNotFound: "Không tìm thấy lệnh: {commandName}",
                errorExecuting: "Lỗi khi thực thi lệnh {commandName}:",
                errorHelpButton: "Lỗi xử lý nút trợ giúp:",
                errorHelpSelect: "Lỗi xử lý chọn danh mục trợ giúp:",
                unexpectedError: "Lỗi không mong muốn:",
                failedToSendError: "Không thể gửi thông báo lỗi:"
            }
        },
        mongodb: {
            uriNotDefined: "MongoDB URI chưa được cấu hình.",
            skippingConnection: "Bỏ qua kết nối MongoDB vì chưa có URI.",
            connected: "Đã kết nối MongoDB ✅",
            connectionFailed: "Không thể kết nối MongoDB. Tiếp tục không dùng database."
        },
        lavalink: {
            nodesConfigured: "Đã cấu hình {count} node",
            riffyInitialized: "Khởi tạo với {count} node",
            nodeKeys: "Node keys:",
            failedToInitialize: "Khởi tạo Riffy thất bại: {message}",
            riffyReinitialized: "Riffy đã khởi tạo lại",
            failedToReinitialize: "Khởi tạo lại thất bại: {message}",
            nodeConnected: "Đã kết nối: {name} ({host}:{port}) • {available}/{total} online",
            nodeDisconnected: "Ngắt kết nối: {name} ({host}:{port}) • {available}/{total} online",
            retryLimitReported: "{name} báo đạt giới hạn retry; tiếp tục reconnect",
            nodeError: "Lỗi: {name} ({host}:{port}) • {message}",
            nodeStatus: "{available}/{total} online",
            waitingForConnection: "Đang chờ kết nối Lavalink...",
            nodeAvailable: "Node sẵn sàng ({count} kết nối)",
            noNodesConnected: "Không có node nào kết nối ({connected}/{total}) — đang reconnect...",
            nodeStatusReport: "Trạng thái node: {connected}/{total} kết nối"
        },
        player: {
            lacksPermissions: "Bot thiếu quyền gửi tin nhắn trong kênh này.",
            errorSendingMessage: "Lỗi gửi tin nhắn: {message}",
            trackException: "Track Exception cho guild {guildId}: {message}",
            trackStuck: "Track bị stuck cho guild {guildId}: {message}",
            trackNull: "Track null hoặc thiếu info cho guild {guildId} - bỏ qua",
            playerInvalid: "Player không hợp lệ hoặc đã hủy cho guild {guildId} - bỏ qua",
            channelNotFound: "Không tìm thấy kênh của guild {guildId}",
            errorSavingHistory: "Lỗi lưu lịch sử:",
            errorMusicCard: "Lỗi tạo hoặc gửi music card: {message}",
            autoplayDisabled: "Autoplay bị tắt cho guild: {guildId}",
            errorQueueEnd: "Lỗi xử lý queue end:",
            errorCleanupPrevious: "Lỗi dọn message bài trước:",
            errorCleanupTrack: "Lỗi dọn message bài:",
            lyricsFetchError: "❌ Lỗi tải lời: {message}",
            unableToSendMessage: {
                title: "## ⚠️ Không Thể Gửi Tin Nhắn",
                message: "Không thể gửi tin nhắn. Hãy kiểm tra quyền bot."
            },
            trackError: {
                title: "## ⚠️ Lỗi Track",
                message: "Không thể tải track.",
                skipping: "Đang bỏ qua bài..."
            },
            unableToLoadCard: {
                title: "## ⚠️ Không Thể Tải Thẻ Bài",
                message: "Không thể tải thẻ bài. Tiếp tục phát..."
            },
            queueEnd: {
                noMoreAutoplay: "⚠️ **Hết bài cho autoplay. Đang ngắt...**",
                queueEndedAutoplayDisabled: "🎶 **Hết queue. Autoplay đang tắt.**",
                queueEmpty: "👾 **Queue trống! Đang ngắt...**",
                twentyfoursevenEmpty: "🔄 **Chế độ 24/7: Bot vẫn ở kênh. Queue trống.**"
            },
            voiceChannelRequired: {
                title: "## 🔒 Cần Ở Kênh Voice",
                message: "Bạn phải ở cùng kênh voice để dùng nút điều khiển!"
            },
            controls: {
                skip: "⏭️ **Đang chuyển bài...**",
                queueCleared: "🗑️ **Đã xóa queue!**",
                playbackStopped: "⏹️ **Đã dừng và hủy player!**",
                alreadyPaused: "⏸️ **Đã tạm dừng sẵn!**",
                playbackPaused: "⏸️ **Đã tạm dừng!**",
                alreadyResumed: "▶️ **Đã tiếp tục sẵn!**",
                playbackResumed: "▶️ **Đã tiếp tục phát!**",
                volumeMax: "🔊 **Âm lượng đã tối đa!**",
                volumeMin: "🔉 **Âm lượng đã tối thiểu!**",
                volumeChanged: "🔊 **Âm lượng: {volume}%!**",
                trackLoopActivated: "🔁 **Đã bật lặp bài!**",
                queueLoopActivated: "🔁 **Đã bật lặp queue!**",
                loopDisabled: "❌ **Đã tắt lặp!**"
            },
            lyrics: {
                noSongPlaying: "🚫 **Không có bài đang phát.**",
                notFound: "❌ **Không tìm thấy lời bài hát!**",
                liveTitle: "## 🎵 Lời Đồng Bộ: {title}",
                syncing: "🔄 Đang đồng bộ lời...",
                fullTitle: "## 🎵 Lời Đầy Đủ: {title}",
                stopButton: "Dừng lời",
                fullButton: "Lời đầy đủ",
                deleteButton: "Xóa"
            },
            trackInfo: {
                title: "**Tên:**",
                author: "**Tác giả:**",
                length: "**Thời lượng:**",
                requester: "**Yêu cầu bởi:**",
                source: "**Nguồn:**",
                progress: "**Tiến trình:**",
                unknownArtist: "Không rõ",
                unknown: "Không rõ"
            },
            controlLabels: {
                loop: "Lặp",
                disable: "Tắt",
                skip: "Bỏ qua",
                queue: "Queue",
                clear: "Xóa",
                stop: "Dừng",
                pause: "Tạm dừng",
                resume: "Tiếp tục",
                volUp: "Âm ",
                volDown: "Âm -"
            }
        }
    }
};
